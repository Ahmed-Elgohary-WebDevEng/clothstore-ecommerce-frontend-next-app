"use client";
import React, { useEffect, useState } from "react";
import { slides } from "@/constants/slider";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HomeSlider = ({}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* Text */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex items-center justify-center gap-8 flex-col text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <Button variant={"default"}>SHOP NOW</Button>
              </Link>
            </div>
            {/* Image */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2">
              <Image
                src={slide.img}
                alt={"slide img"}
                fill
                sizes="100%"
                className={"object-cover"}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
