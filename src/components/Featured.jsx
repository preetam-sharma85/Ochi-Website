import { motion, useScroll } from "framer-motion";
import React from "react";

function Featured() {
 
  return (
    <div id="featured" className="w-full py-20  bg-zinc-100">
      <div className="w-full px-20 border-b-[2px] border-zinc-500 pb-20">
        <h1 className="text-7xl text-black">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-5 mt-20">
          <div className="cardcontainer w-1/2  h-[75vh] ">
          <div className="flex  items-center">
          <div className="w-2 h-2 mb-4  bg-zinc-900 rounded-full"></div>
          <p className="text-black pb-4 px-3 font-semibold">FYDE</p>
          </div>
            <div className=" card w-full h-full rounded-2xl overflow-hidden ">
              <img
                className="w-full h-full"
                src="/public/Fyde_Illustration.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer w-1/2  h-[75vh]">
          <div className="flex  items-center">
          <div className="w-2 h-2 mb-4  bg-zinc-900 rounded-full"></div>
          <p className="text-black pb-4 px-3 font-semibold">VISE</p>
          </div>
              <div className=" card w-full h-full rounded-2xl overflow-hidden ">
              <img
                className="w-full h-full"
                src="/public/Vise_front2.jpg"
                alt=""
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Featured;
