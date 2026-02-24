import { motion } from "motion/react";
import { MessageCircle, Sparkles } from "lucide-react";

const newArrivals = [
  { name: "JIJI Limited Edition Hoodie", price: "Ksh 4,500", badge: "NEW" },
  { name: "Nairobi Skyline Tee", price: "Ksh 2,100", badge: "HOT" },
  { name: "Street Cred Sneakers", price: "Ksh 6,200", badge: "LIMITED" },
];

export default function NewArrivals() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-jiji-red" />
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
            NEW <span className="text-jiji-red">DROPS</span>
          </h2>
          <Sparkles className="w-8 h-8 text-jiji-red" />
        </div>
        <p className="text-xl text-jiji-white/70 max-w-2xl mx-auto">
          Fresh off the streets. Limited quantities, first come first served.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {newArrivals.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-jiji-red text-jiji-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {item.badge}
              </span>
            </div>

            {/* Product Card */}
            <div className="bg-jiji-black border border-jiji-green/30 p-6 h-full">
              <div className="aspect-[4/5] bg-zinc-900 border border-jiji-green/20 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
                <span className="text-3xl font-display text-jiji-green/40 uppercase tracking-widest -rotate-12">
                  Coming Soon
                </span>
                <div className="absolute inset-0 bg-jiji-red/0 group-hover:bg-jiji-red/5 transition-colors duration-500" />
              </div>

              <h3 className="text-xl font-display uppercase tracking-wider mb-2">
                {item.name}
              </h3>
              <p className="text-jiji-red font-bold text-lg mb-4">{item.price}</p>

              <motion.a
                href={`https://wa.me/254703779064?text=Hey Eli, I'm interested in the ${item.name}`}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.95 }}
                className="w-full bg-jiji-green text-jiji-white py-3 font-display text-lg tracking-wider flex items-center justify-center gap-2 hover:bg-jiji-red transition-all"
              >
                <MessageCircle className="w-4 h-4" /> COP NOW
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center"
      >
        <a
          href="#products"
          className="inline-flex items-center gap-2 text-jiji-green hover:text-jiji-red transition-colors font-display text-xl tracking-wider"
        >
          VIEW FULL COLLECTION →
        </a>
      </motion.div>
    </section>
  );
}
