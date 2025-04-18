"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center space-x-2 m-0 p-0 list-none">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full transition-all duration-300"></div>
    ),
  };

  return (
    <div className="max-w-[722px]  w-full sm:block hidden ">
      <Slider {...settings}>
        <div>
          <div className="relative  ">
            <Image
              src="/auth-images/signup.png"
              width={722}
              height={100}
              alt="Picture of the author"
              className="relative w-full "
            />
            <div className="absolute top-0 p-[20px]">
              <Image
                src="/auth-images/logo.png"
                width={100}
                height={45}
                alt="logo"
              />
              <div className="mt-[90px]">
                <p className="text-white font-[700] text-[30px] leading-[1.2]">
                  AI Learning & Sharing Community
                </p>
                <p className="text-white font-[700] text-[23px] mt-[17px]">
                  Discover. Create. Inspire.
                </p>
                <p className="text-white font-[500] text-[16px] max-w-[278px] w-full mt-[17px]">
                  One place to share, discover & collect AI content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="relative ">
            <Image
              src="/auth-images/signup.png"
              width={722}
              height={100}
              alt="Picture of the author"
             className="relative w-full "
            />
            <div className="absolute top-0 p-[20px]">
              <Image
                src="/auth-images/logo.png"
                width={100}
                height={45}
                alt="logo"
              />
              <div className="mt-[90px]">
                <p className="text-white font-[700] text-[30px] leading-[1.2]">
                  AI Learning & Sharing Community
                </p>
                <p className="text-white font-[700] text-[23px] mt-[17px]">
                  Discover. Create. Inspire.
                </p>
                <p className="text-white font-[500] text-[16px] max-w-[278px] w-full mt-[17px]">
                  One place to share, discover & collect AI content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="relative ">
            <Image
              src="/auth-images/signup.png"
              width={722}
              height={100}
              alt="Picture of the author"
             className="relative w-full"
            />
            <div className="absolute top-0 p-[20px]">
              <Image
                src="/auth-images/logo.png"
                width={100}
                height={45}
                alt="logo"
              />
              <div className="mt-[90px]">
                <p className="text-white font-[700] text-[30px] leading-[1.2]">
                  AI Learning & Sharing Community
                </p>
                <p className="text-white font-[700] text-[23px] mt-[17px]">
                  Discover. Create. Inspire.
                </p>
                <p className="text-white font-[500] text-[16px] max-w-[278px] w-full mt-[17px]">
                  One place to share, discover & collect AI content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: #DB5689; /* Tailwind's blue-500 */
        }
      `}</style>
    </div>
  );
};

export default Carousel;
