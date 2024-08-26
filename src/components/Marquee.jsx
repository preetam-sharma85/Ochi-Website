import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-20 bg-green-900 rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 py-2 flex whitespace-nowrap ">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="text-[16vw] leading-none font-bold pr-20">WE ARE OCHI!</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="text-[16vw] leading-none font-bold pr-20">WE ARE OCHI!</motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
