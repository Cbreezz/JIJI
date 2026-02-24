import { motion } from "motion/react";

export default function Breadcrumbs() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "#products" },
  ];

  return (
    <nav className="px-6 py-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-sm text-jiji-white/60"
      >
        {crumbs.map((crumb, index) => (
          <div key={crumb.name} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            <a 
              href={crumb.href} 
              className="hover:text-jiji-green transition-colors uppercase tracking-wider"
            >
              {crumb.name}
            </a>
          </div>
        ))}
      </motion.div>
    </nav>
  );
}
