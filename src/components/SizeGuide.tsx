import { motion } from "motion/react";

export default function SizeGuide() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-display font-black mb-12 tracking-tighter text-center"
      >
        KNOW YOUR <span className="text-jiji-green">SIZE</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Apparel Table */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-zinc-900/50 border border-white/10 p-6"
        >
          <h3 className="text-2xl font-display mb-6 tracking-widest text-jiji-red">HOODIES & TEES</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-jiji-white/50 text-sm uppercase tracking-widest">
                <th className="py-3 px-2">Size</th>
                <th className="py-3 px-2">Chest (in)</th>
                <th className="py-3 px-2">Length (in)</th>
              </tr>
            </thead>
            <tbody className="text-jiji-white/80">
              {["S", "M", "L", "XL", "XXL"].map((size, i) => (
                <tr key={size} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-2 font-bold">{size}</td>
                  <td className="py-4 px-2">{20 + i * 2}</td>
                  <td className="py-4 px-2">{27 + i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Shoes Table */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-zinc-900/50 border border-white/10 p-6"
        >
          <h3 className="text-2xl font-display mb-6 tracking-widest text-jiji-green">SNEAKERS</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-jiji-white/50 text-sm uppercase tracking-widest">
                <th className="py-3 px-2">UK</th>
                <th className="py-3 px-2">EU</th>
                <th className="py-3 px-2">US</th>
              </tr>
            </thead>
            <tbody className="text-jiji-white/80">
              {[6, 7, 8, 9, 10, 11, 12].map((uk) => (
                <tr key={uk} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-2 font-bold">{uk}</td>
                  <td className="py-4 px-2">{uk + 34}</td>
                  <td className="py-4 px-2">{uk + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
