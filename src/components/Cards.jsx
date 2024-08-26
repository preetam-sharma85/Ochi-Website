import React from "react";

function Cards() {
  return (
    <div  className="w-full h-[90vh] bg-zinc-300 flex items-center justify-center px-10 ">
      <div className="cardcontainer w-1/2 px-5 py-8">
        <div className="w-full bg-green-700 h-[55vh] relative rounded-2xl flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
          <button className="border-[2px] rounded-3xl absolute left-9 bottom-8 px-5 py-1 border-lime-400 text-lime-400">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 flex items-center justify-center gap-5 ">
        <div className="w-1/2 bg-zinc-800 h-[55vh] relative flex items-center justify-center rounded-2xl">
          <img src="/public/logo002.svg" />
          <button className="border-[2px] rounded-3xl absolute left-9 bottom-8 px-5 py-1 border-zinc-300 text-zinc-300">
            RATING5.0 ON CLUTCH
          </button>
        </div>
        <div className="w-1/2 bg-zinc-800 h-[55vh] relative flex items-center justify-center rounded-2xl">
          <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className="rounded-full " />
          <button className="border-[2px] rounded-3xl absolute left-6 bottom-8 px-4 py-1 border-zinc-300 text-zinc-300">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
