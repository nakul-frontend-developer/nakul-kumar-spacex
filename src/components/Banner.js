import React from "react";

const Banner = () => {
  return (
    <>
      <section className="relative bg-indigo-200 w-full h-[550px] featured">
        <div className="container p-5 mx-auto h-full flex flex-col text-center max-w-[650px] items-center justify-center">
          <h1 className="text-white font-bold text-4xl">FALCON 9 IN FLIGH</h1>
          <p className="text-white font-medium">
            Merlin is a family of rocket engines developed by SpaceX for use on
            its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin
            engines use a rocket grade kerosene (RP-1) and liquid oxygen as
            rocket propellants in a gas-generator power cycle. The Merlin engine
            was originally designed for recovery and reuse.
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
