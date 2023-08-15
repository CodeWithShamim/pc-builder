import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

const bannerItems = [
  {
    id: 1,
    image: "/banner/banner2.jpg",
  },
  {
    id: 2,
    image: "/banner/banner1.png",
  },

  // {
  //   id: 3,
  //   image: "/banner/banner3.jpg",
  // },
  // {
  //   id: 4,
  //   image: "/banner/banner4.jpg",
  // },
  // {
  //   id: 3,
  //   image: "/banner/banner5.jpg",
  // },
];

const Banner = () => {
  return (
    <div className="lg:h-[450px] flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-4 py-4">
      <div className="w-full lg:w-1/4 h-full flex flex-row lg:flex-col gap-2 items-center justify-center">
        <div className="lg:h-[221px] w-full">
          <Image
            src="/banner/banner2.jpg"
            alt="banner side image"
            height={100}
            width={100}
            quality={100}
            layout="responsive"
            objectFit="cover"
            className="h-full rounded"
            priority
          />
        </div>
        <div className="lg:h-[221px] w-full">
          <Image
            src="/banner/banner1.png"
            alt="banner side image"
            height={100}
            width={100}
            quality={100}
            layout="responsive"
            objectFit="cover"
            className="h-full rounded"
            priority
          />
        </div>
      </div>

      <div className="w-full lg:w-3/4 h-full">
        <Carousel autoplay waitForAnimate={true}>
          {bannerItems.map((item) => (
            <div key={item.id} className="h-[30%] w-full">
              <Image
                src={item.image}
                alt={item.image}
                height={100}
                width={100}
                quality={100}
                layout="responsive"
                objectFit="cover"
                // priority
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
