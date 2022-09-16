import React from "react";

const FoxEntrace = () => {
  return (
    <>
      <div className="fox w-full bg-black h-[100vh]">
        <video id="video" className="w-full h-full" src="/century_fox.mp4" loop muted autoPlay />
      </div>
    </>
  );
};

export default FoxEntrace;
