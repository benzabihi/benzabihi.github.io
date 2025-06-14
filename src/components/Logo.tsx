import React from "react";
import { motion } from "framer-motion";

const Logo: React.FC = () => (
  <motion.div
    className="relative w-40 h-40 md:w-56 md:h-56"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 15 }}
  >
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full rounded-full overflow-visible"
    >
      <defs>
        <linearGradient id="gradBZ" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#gradBZ)" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="42"
        fontFamily="sans-serif"
        fontWeight="800"
        fill="white"
      >
        BZ
      </text>
    </svg>

    {/* subtle outer glow */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-40 blur-2xl rounded-full" />
  </motion.div>
);

export default Logo;
