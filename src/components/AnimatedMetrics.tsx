import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 47,
    suffix: "",
    description: "negocios locales confían en nosotros",
    isDecimal: false,
  },
  {
    value: 4.9,
    suffix: "★",
    description: "valoración media de nuestros clientes",
    isDecimal: true,
    isStar: true,
  },
  {
    value: 48,
    suffix: "h",
    description: "tu web lista desde que empezamos",
    isDecimal: false,
  },
  {
    value: 53,
    suffix: "%",
    description: "menos coste por cliente vs. empresas similares",
    isDecimal: false,
  },
];

type AnimatedMetricProps = {
  value: number;
  suffix: string;
  description: string;
  isDecimal: boolean;
  isStar?: boolean;
};

const AnimatedMetric = ({ value, suffix, description, isDecimal, isStar = false }: AnimatedMetricProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [showStar, setShowStar] = useState(false);

  const rounded = useTransform(count, (latest) => {
    if (isDecimal) {
      return Number(latest.toFixed(1));
    }
    return Math.round(latest);
  });

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
      if (isStar && latest >= 4.9) {
        setShowStar(true);
      }
    });
    return unsubscribe;
  }, [rounded, isStar]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref} className="text-center flex flex-col items-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-[3.5rem] font-extrabold text-[#0F172A]">
          {displayValue}
        </span>
        {suffix && (
          <span
            className={`text-[3.5rem] font-extrabold ${
              isStar ? "text-[#F59E0B]" : "text-[#2563EB]"
            }`}
          >
            {suffix}
          </span>
        )}
      </div>
      <p className="text-sm text-[#64748B] mt-2">{description}</p>
    </div>
  );
};

const AnimatedMetrics = () => {
  return (
    <section className="bg-white border-y border-[#E2E8F0] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <React.Fragment key={index}>
              <AnimatedMetric {...metric} />
              {index < metrics.length - 1 && index % 2 === 1 && (
                <div className="hidden md:block col-span-1 border-l border-[#E2E8F0]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedMetrics;
