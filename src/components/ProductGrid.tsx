import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const products = [
  { name: "JIJI Heavyweight Hoodie", price: "Ksh 3,500" },
  { name: "Nairobi Nights Tee", price: "Ksh 1,800" },
  { name: "Streets Sneakers", price: "Ksh 5,500" },
  { name: "JIJI Cap", price: "Ksh 1,200" },
  { name: "Cargo Pants", price: "Ksh 4,200" },
  { name: "Graphic Tee Vol.2", price: "Ksh 1,800" },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
        className="text-7xl md:text-9xl font-display font-black mb-16 tracking-tighter"
      >
        THE <span className="text-jiji-red">HEAT</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className={`group relative bg-jiji-black border border-jiji-green/30 p-4 ${
              i % 2 === 1 ? "md:translate-y-12" : ""
            }`}
          >
            {/* Image Placeholder */}
            <div className="relative aspect-[4/5] bg-zinc-900 border border-jiji-green/20 flex items-center justify-center overflow-hidden mb-6">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
              <span className="text-4xl font-display text-jiji-green/40 uppercase tracking-widest -rotate-12 border-4 border-jiji-green/20 p-4">
                Photo Coming Soon
              </span>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-jiji-red/0 group-hover:bg-jiji-red/5 transition-colors duration-500" />
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-display uppercase tracking-wider mb-1">
                  {product.name}
                </h3>
                <p className="text-jiji-red font-bold text-xl">{product.price}</p>
              </div>
            </div>

            <motion.a
              href={`https://wa.me/254703779064?text=Hey Eli, I'm interested in the ${product.name}`}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.95 }}
              className="w-full bg-jiji-white text-jiji-black py-3 font-display text-xl tracking-wider flex items-center justify-center gap-2 hover:bg-jiji-green hover:text-jiji-white transition-all"
            >
              <MessageCircle className="w-5 h-5" /> ORDER VIA WHATSAPP
            </motion.a>

            {/* Stencil effect corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-jiji-green/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-jiji-green/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-jiji-green/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-jiji-green/50" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
