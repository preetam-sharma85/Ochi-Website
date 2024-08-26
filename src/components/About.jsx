import React from "react";

function About() {
  return (
    <>
      <div id="about" className="w-full py-20 px-16 bg-[#CDEA68]  rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-semibold text-[3.4vw] leading-[3.5vw] w-[90%]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <u>raise funds, sell prod­ucts, ex­plain com­plex ideas,</u> and
          <u> hire great peo­ple.</u>
        </h1>
      </div>
      <div className="border-t-[1px] flex gap-10 py-8 px-12 border-zinc-400 w-full bg-[#CDEA68]  ">
        <div className="w-1/2 ">
          <h1 className="text-6xl mb-7 text-black">Our approuch:</h1>
          <button className=" flex gap-12 items-center px-8 py-5 text-white bg-zinc-900 rounded-full">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] ">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="rounded-3xl"/>
        </div>
      </div>
    </>
  );
}

export default About;
