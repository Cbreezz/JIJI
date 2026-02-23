import { motion } from "motion/react";

export default function Marquee() {
  const items = [
    "NAIROBI", "JIJI", "MTAANI", "HUSTLE", "AUTHENTIC", "KENYAN", "FRESH FITS", "NO CAP"
  ];

  return (
    <div className="bg-jiji-black border-y border-white/10 py-4 overflow-hidden whitespace-nowrap flex">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 pr-12"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            {items.map((item, idx) => (
              <span
                key={idx}
                className={`text-2xl md:text-4xl font-display font-bold tracking-widest ${
                  idx % 2 === 0 ? "text-jiji-green" : "text-jiji-red"
                }`}
              >
                {item} <span className="text-jiji-white ml-12">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
