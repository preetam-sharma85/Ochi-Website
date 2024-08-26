import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Landing() {
  return (
    <div id="home"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-14">
        {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((items, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[10vh] relative -bottom-[.5vw] bg-cover bg-center bg-[url('/public/content-image01.jpg')] mr-[1vw] rounded-md"
                  ></motion.div>
                )}
                <h1 className="text-8xl leading-[5.5VW] tracking-tighter font-bold">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] border-zinc-600 mt-32 flex justify-between items-center py-4 px-16 text-xl">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p className="font-light text-md tracking-tight leading-none">
            {items}
          </p>
        ))}
        <div className="start flex items-center  gap-4">
          <div className="px-4 py-1 cursor-pointer rounded-full border-[2px] border-zinc-500 font-light text-md">
            START THE PROJECT
          </div>
          <div className="w-8 cursor-pointer h-8 flex items-center justify-center border-zinc-500 rounded-full border-[2px]">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
