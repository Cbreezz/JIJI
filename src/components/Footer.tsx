import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-[12rem] font-display font-black tracking-tighter mb-4 text-jiji-white/10"
        >
          JIJI
        </motion.h2>
        
        <p className="text-xl md:text-2xl font-display tracking-[0.3em] mb-12 text-jiji-green">
          NAIROBI'S FRESHEST FITS
        </p>

        <div className="flex gap-8 mb-12">
          <a href="https://wa.me/254703779064" target="_blank" rel="noreferrer" className="hover:text-jiji-green transition-colors">
            <MessageCircle className="w-8 h-8" />
          </a>
          <a href="https://instagram.com/jijistreets" target="_blank" rel="noreferrer" className="hover:text-jiji-red transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
        </div>

        <div className="w-full h-px bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-jiji-white/40 text-sm uppercase tracking-widest gap-4">
          <p>© 2025 JIJI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-jiji-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-jiji-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
