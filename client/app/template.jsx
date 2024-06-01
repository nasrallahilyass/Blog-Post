'use client'

import { motion } from "framer-motion";
import useScrollProgress from '../hooks/UseScrollProgress';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 }
}

const ScrollPage = () => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.div
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ type: 'linear', duration: 0.4, delay: 0.2 }}
      >
      </motion.div>
      <span 
        style={{ transform: `translateY(${completion - 100}%)` }} 
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
}

export default ScrollPage;