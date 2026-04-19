import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34644610120?text=Hola%2C%20quiero%20empezar%20sin%20riesgo";

const SimpleGuarantee = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empieza <span className="gradient-text">sin riesgo</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          {/* Mobile compact format */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-3 py-3 border-b border-[#E2E8F0]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Ves tu web antes de pagar</h3>
                <p className="text-sm text-gray-600">Te enseñamos el diseño final antes de cualquier compromiso</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-3 py-3 border-b border-[#E2E8F0]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Cambios ilimitados</h3>
                <p className="text-sm text-gray-600">Ajustamos todo hasta que estés 100% satisfecho</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-3 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Sin permanencia</h3>
                <p className="text-sm text-gray-600">Cancela cuando quieras, sin costes ocultos</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop card format */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ves tu web antes de pagar</h3>
              <p className="text-gray-600">Te enseñamos el diseño final antes de cualquier compromiso</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cambios ilimitados</h3>
              <p className="text-gray-600">Ajustamos todo hasta que estés 100% satisfecho</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sin permanencia</h3>
              <p className="text-gray-600">Cancela cuando quieras, sin costes ocultos</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
          >
            <MessageCircle className="h-5 w-5" />
            Quiero empezar sin riesgo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleGuarantee;
