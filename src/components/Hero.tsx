import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Fog/Smoke */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-[150%] h-1/2 bg-gradient-to-r from-transparent via-jiji-green/20 to-transparent blur-[100px] rotate-12"
        />
        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-[150%] h-1/2 bg-gradient-to-r from-transparent via-jiji-red/10 to-transparent blur-[100px] -rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] mb-6 tracking-tighter">
              NAIROBI'S <br />
              <span className="text-jiji-green">FRESHEST</span> FITS
            </h1>
            <p className="text-lg md:text-xl text-jiji-white/70 max-w-md mb-10 font-medium">
              Hoodies, tees, sneakers, caps — all heat, no filler.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/254703779064"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-jiji-green text-jiji-white px-8 py-4 rounded-none font-display text-2xl tracking-wider flex items-center justify-center gap-3 hover:bg-jiji-red transition-colors"
              >
                <MessageCircle className="w-6 h-6" /> ORDER ON WHATSAPP
              </motion.a>
              <motion.a
                href="https://instagram.com/jijistreets"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-jiji-white/20 px-8 py-4 rounded-none font-display text-2xl tracking-wider flex items-center justify-center gap-3 hover:bg-white hover:text-jiji-black transition-all"
              >
                <Instagram className="w-6 h-6" /> VIEW INSTAGRAM
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Graffiti SVG */}
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_30px_rgba(26,58,42,0.4)]">
              <defs>
                <linearGradient id="graffitiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <motion.stop 
                    offset="0%" 
                    animate={{ stopColor: ["#1A3A2A", "#8B0000", "#1A3A2A"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <motion.stop 
                    offset="100%" 
                    animate={{ stopColor: ["#8B0000", "#1A3A2A", "#8B0000"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </linearGradient>
              </defs>
              
              {/* Drip effects */}
              <motion.path
                d="M100,250 L100,350 M200,280 L200,400 M300,260 L300,380 M400,270 L400,420"
                stroke="url(#graffitiGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />

              {/* JIJI Text in Graffiti Style */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#graffitiGradient)"
                className="font-display text-[180px] font-black italic"
                style={{ filter: "url(#noiseFilter)" }}
              >
                JIJI
              </text>
              
              {/* Spray paint splatters */}
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={100 + Math.random() * 300}
                  cy={100 + Math.random() * 300}
                  r={2 + Math.random() * 8}
                  fill={i % 2 === 0 ? "#1A3A2A" : "#8B0000"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.6, 0] }}
                  transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
