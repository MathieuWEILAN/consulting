import Card from "../Card";
import Image from "next/image";
import Button from "../Button";
import hero3 from "../../assets/img/hero3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { commentsCards, CommentsCardType } from "../../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

const Block4 = () => {
  const [slides, setSlides] = useState<number>(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 1280
        ? 2
        : window.innerWidth > 1280
        ? 3
        : 0
    );
  };
  useEffect(() => {
    // Initially set the amount of slides on page load
    setSlidesPerview();
    // Add the event listener on component mount
    window.addEventListener("resize", setSlidesPerview);
    // Remove the listener on unmount
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <section className="block4 w-full py-0">
      <div className=" mx-auto flex flex-col h-full split-bg-left">
        <h2 className="w-full flex items-start text-left container mx-auto">
          Ils nous ont fait confiance
        </h2>{" "}
        <div className="py-2.5 lg:py-10 w-full">
          {" "}
          <Swiper
            className="h-full w-full !mx-auto container"
            slidesPerView={slides}
            // onSlideChange={handleAnimate}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
          >
            {commentsCards.map((el, i) => {
              return (
                <SwiperSlide key={i} className="mx-auto w-full">
                  <CardComment infos={el} />
                </SwiperSlide>
              );
            })}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Block4;

const CardComment = ({ infos }: { infos: CommentsCardType }) => {
  return (
    <div className="shadow-lg w-96 h-56 bg-slate-50 rounded-xl p-5 mt-2.5 mb-8 lg:my-8 mx-auto flex flex-col justify-between">
      <p className="italic">"{infos.comment}"</p>
      <div className="flex items-center space-x-4 justify-end">
        <div className="space-x-1">
          <span className="capitalize">{infos.firstName}</span>
          <span className="uppercase">{infos.lastName}</span>
        </div>{" "}
        <Image
          src={infos.photo.src}
          alt="Vercel Logo"
          width={700}
          height={24}
          priority
          className={`h-24 w-24 object-cover bg-white object-center rounded-full`}
        />
      </div>
    </div>
  );
};
