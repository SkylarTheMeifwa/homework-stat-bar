// RankUpAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function RankUpAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center z-50"
    >
      <div className="text-3xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-md animate-pulse">
        ★ Rank Up!
      </div>
    </motion.div>
  );
}
