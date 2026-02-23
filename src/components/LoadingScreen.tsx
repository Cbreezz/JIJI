import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 500); // Give time for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = [
    { char: "J", color: "text-jiji-black", initial: { x: -500, y: -500, rotate: -45 } },
    { char: "I", color: "text-jiji-green", initial: { x: 500, y: -500, rotate: 45 } },
    { char: "J", color: "text-jiji-red", initial: { x: -500, y: 500, rotate: 90 } },
    { char: "I", color: "text-jiji-white", initial: { x: 500, y: 500, rotate: -90 } },
  ];

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
          transition={{ duration: 0.5, ease: "circIn" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-jiji-black overflow-hidden"
        >
          <div className="relative flex gap-4 md:gap-8">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={l.initial}
                animate={{ x: 0, y: 0, rotate: 0 }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  delay: i * 0.15,
                  duration: 0.4,
                }}
                className={`text-8xl md:text-[12rem] font-display font-black ${l.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
              >
                {l.char}
              </motion.span>
            ))}
          </div>
          
          {/* Shatter effect placeholder - simple particles */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "50%", y: "50%" }}
                animate={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  rotate: Math.random() * 360
                }}
                className="absolute w-2 h-2 bg-jiji-white opacity-50"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
