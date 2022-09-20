import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="absolute h-[100vh] md:top-0 left-0 flex justify-center w-full p-14 md:p-24 lg:p-36 text-white bg-black warning">
        <div className="content">
          <div className="flex justify-center text-6xl font-bold text-red-600 uppercase warning-text">
            Warning
          </div>
          <div className="pt-8 warning-detail font-[Montserrat] text-justify text-xl tracking-wider ">
            These warnings prevent audiences from stumbling blindly into a scene
            that might rouse past traumas or scenes that they simply don't want
            to read about.
            <span className="italic tracking-wider">
              {" "}
              Some common and critical warnings are lots of questions about
              salary, promotions,sick pay, benefits, Lack of trust, Narcissism,
              Disrespecting Boundaries, Lack of Communication...
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
