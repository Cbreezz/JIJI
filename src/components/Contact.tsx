import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-jiji-green/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-9xl font-display font-black mb-12 tracking-tighter"
        >
          FIND <span className="text-jiji-green">JIJI</span>
        </motion.h2>

        <div className="flex flex-col items-center gap-8">
          <motion.a
            href="https://instagram.com/jijistreets"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-2xl font-display tracking-widest hover:text-jiji-red transition-colors"
          >
            <Instagram className="w-6 h-6" /> @JIJISTREETS
          </motion.a>

          <p className="text-xl text-jiji-white/60 max-w-md mt-8 font-medium">
            Slide into our DMs to order, ask about sizes, or just see what's new. We respond fast.
          </p>
        </div>
      </div>
    </section>
  );
}
