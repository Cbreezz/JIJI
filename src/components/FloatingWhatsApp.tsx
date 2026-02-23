import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/254703779064"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-jiji-green text-jiji-white p-4 rounded-full shadow-[0_0_20px_rgba(26,58,42,0.5)] flex items-center justify-center group"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-jiji-green rounded-full opacity-20"
      />
      <MessageCircle className="w-8 h-8 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-jiji-black text-jiji-white px-4 py-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
        Order Now
      </span>
    </motion.a>
  );
}
