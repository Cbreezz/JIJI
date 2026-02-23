import { motion } from "motion/react";

export default function Manifesto() {
  const words = ["FRESH", "FITS.", "REAL", "PRICE.", "NO", "CAP."];

  return (
    <section id="manifesto" className="relative py-32 px-6 bg-jiji-black overflow-hidden">
      {/* Background Smoke */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-b from-jiji-red/10 via-transparent to-jiji-green/10 blur-[120px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
              className={`text-6xl md:text-9xl font-display font-black tracking-tighter ${
                i % 2 === 1 ? "text-jiji-red" : "text-jiji-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-jiji-white/80 leading-relaxed mb-8 font-medium">
            JIJI connects you to the freshest streetwear in Nairobi. Hoodies, tees, sneakers, caps — carefully picked, fairly priced, delivered with that Nairobi energy. Hit us on WhatsApp to order.
          </p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
            className="h-1 bg-jiji-red w-full origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
}
