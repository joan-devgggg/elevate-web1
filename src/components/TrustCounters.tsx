import { motion } from "framer-motion";
import { Clock, Users, TrendingUp, Award, Shield } from "lucide-react";

const TrustCounters = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10 border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg mb-4 mx-auto">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Webs entregadas</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg mb-4 mx-auto">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">0€</div>
            <div className="text-sm text-muted-foreground">Hasta que te guste</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg mb-4 mx-auto">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">4.9</div>
            <div className="text-sm text-muted-foreground">Valoración media</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg mb-4 mx-auto">
              <Clock className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">48h</div>
            <div className="text-sm text-muted-foreground">Entrega rápida</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustCounters;
