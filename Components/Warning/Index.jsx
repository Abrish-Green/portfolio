import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="warning w-full h-full absolute top-0 left-0 bg-black text-white flex justify-center p-64">
        <div className="content">
          <div className="warning-text flex justify-center text-6xl text-red-600 uppercase font-bold">
            Warning
          </div>
          <div className="warning-detail pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dicta ab modi minima neque, voluptate quisquam eligendi totam
            perspiciatis veritatis ducimus eum, pariatur voluptatibus provident
            quis nostrum nihil debitis aliquid?
          </div>
        </div>
        <div className="no-smoking">
          <img
            src="https://fontawesomeicons.com/lib/svg/logo-no-smoking.svg"
            alt="No smoking"
            width="200"
            height="100"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
