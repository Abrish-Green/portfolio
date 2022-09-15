import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="absolute top-0 left-0 flex justify-center w-full h-full p-64 text-white bg-black warning">
        <div className="content">
          <div className="flex justify-center text-6xl font-bold text-red-600 uppercase warning-text">
            Warning
          </div>
          <div className="pt-10 warning-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dicta ab modi minima neque, voluptate quisquam eligendi totam
            perspiciatis veritatis ducimus eum, pariatur voluptatibus provident
            quis nostrum nihil debitis aliquid?
          </div>
        </div>
        <div className="bg-white rounded-full h-28 no-smoking w-60">
          <img
            src="https://fontawesomeicons.com/lib/svg/logo-no-smoking.svg"
            alt="No smoking"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
