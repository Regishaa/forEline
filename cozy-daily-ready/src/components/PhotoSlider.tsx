import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import photo3 from "../assets/images/3.jpg";
import photo7 from "../assets/images/7.png";
import photo8 from "../assets/images/8.png";
import photo9 from "../assets/images/9.png";
import photo10 from "../assets/images/10.png";
import photo11 from "../assets/images/11.png";
import photo12 from "../assets/images/12.png";
import photo13 from "../assets/images/13.png";
import photo14 from "../assets/images/14.png";
import photo15 from "../assets/images/15.png";
import photo18 from "../assets/images/18.png";
import photo19 from "../assets/images/19.png";
import photo20 from "../assets/images/20.png";

const slides = [
  { src: photo3, text: "Твоя улыбка — самое красивое украшение! 😁💎" },
  { src: photo7, text: "Смейся громко, мечтай широко! 😂🌙" },
  { src: photo8, text: "Никогда не теряй своей доброты и света! 🌟💛" },
  { src: photo9, text: "С тобой даже самый серый день — праздник. 🎉🌧️" },
  {
    src: photo10,
    text: "Пусть каждый миг будет сладким, как твоя улыбка! 🍬😊",
  },
  { src: photo11, text: "Пусть сбудутся все самые заветные мечты! 🌠💭" },
  { src: photo12, text: "Ты — солнечный лучик! ☀️🌸" },
  { src: photo13, text: "Пусть каждый день будет волшебным ✨🦄" },
  { src: photo14, text: "Пусть улыбка твоя озаряет весь мир! 😄✨" },
  { src: photo15, text: "Ты — заряд позитива и добра. ⚡💖" },
  {
    src: photo18,
    text: "Пусть счастье заглянет в твой дом сегодня и навсегда! 🏡🍀",
  },
  { src: photo19, text: "Никогда не теряй своей доброты и света! 🌟💛" },
  { src: photo20, text: "Ты заслуживаешь всё самое лучшее! 🎉💖" },
];

export default function PhotoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Получаем индекс предыдущего слайдера (с циклом)
  const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  // Получаем индекс следующего слайдера (с циклом)
  const nextIndex = (activeIndex + 1) % slides.length;

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {/* Миниатюра предыдущего слайда слева */}
      <div
        className="
    w-[120px] h-[120px] 
    rounded-lg 
    overflow-hidden 
    border border-pink-200 
    shadow-md 
    cursor-pointer 
    opacity-40 
    hover:opacity-100 
    hover:scale-110 
    transition 
    duration-300 
    ease-in-out
    animate-pulse-slow
  "
      >
        <img
          src={slides[prevIndex].src}
          alt={`prev-slide-${prevIndex}`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Основной слайдер */}
      <div className="relative italic w-[420px] bg-pink-50 p-4 rounded-xl shadow-lg">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !bg-pink-200 opacity-70 hover:opacity-100",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-pink-500 opacity-100",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 4000 }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center">
                <img
                  src={slide.src}
                  alt={`slide-${i}`}
                  className="w-[400px] h-[400px] object-cover rounded-md border border-pink-200"
                />
                <p className="mt-3 pb-8 text-center text-pink-600 font-medium text-lg select-none">
                  {slide.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ← стрелка */}
        <div
          className="swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 text-pink-400 hover:text-pink-600 text-3xl font-bold cursor-pointer select-none z-10"
          aria-label="Previous slide"
        ></div>

        {/* → стрелка */}
        <div
          className="swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 text-pink-400 hover:text-pink-600 text-3xl font-bold cursor-pointer select-none z-10"
          aria-label="Next slide"
        ></div>
      </div>

      {/* Миниатюра следующего слайда справа */}
      <div
        className="
    w-[120px] h-[120px] 
    rounded-lg 
    overflow-hidden 
    border border-pink-200 
    shadow-md 
    cursor-pointer 
    opacity-40 
    hover:opacity-100 
    hover:scale-110 
    transition 
    duration-300 
    ease-in-out
    animate-pulse-slow
  "
      >
        <img
          src={slides[nextIndex].src}
          alt={`prev-slide-${nextIndex}`}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
