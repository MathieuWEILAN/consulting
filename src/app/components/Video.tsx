import React from "react";

const Video = () => {
  return (
    <div className="relative">
      <video
        width="1200"
        height="700"
        autoPlay
        playsInline
        muted
        loop
        preload="none"
        className="w-full h-[650px] lg:h-[700px] object-cover"
      >
        <source src="/homepage.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
export default Video;
