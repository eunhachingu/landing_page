import React from "react";

function Hero() {
  return (
    <div className="text-white flex space-y-4 justify-center items-center">
      <section className="flex-col px-10 py-20 my-32 max-w-lg space-y-5">
        <h1 className="text-4xl font-bold">Mass People Oriented Software</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          veritatis quas temporibus totam delectus dignissimos ut ad minus culpa
          explicabo quam, cupiditate in rem non nemo beatae iusto. Aliquam,
          ipsa?
        </p>

        <div className="flex space-x-10 text-md">
          <button className="px-4 py-2 rounded-sm border-2 ease-in-out duration-300 hover:bg-slate-100 hover:text-black ">
            Get Started
          </button>
          <button className="px-4 py-2 rounded-sm border-2 bg-white  ease-in-out duration-300 text-black hover:bg-slate-500 hover:text-white">
            Download
          </button>
        </div>
      </section>

      <section className="flex">
        <img src="./img/laptop.png" alt="" />
      </section>
    </div>
  );
}

export default Hero;
