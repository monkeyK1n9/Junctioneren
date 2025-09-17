import Image from "next/image";
import images from "../../../public/imgs";
import cn from "clsx";
import { InterUiDisplay } from "@/lib/fonts";
import CButton from "../ui/Button";
import SlideUp from "../Animation/SlideUp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";

const Banner = () => {
  const fontClass = cn(InterUiDisplay.variable, InterUiDisplay.className);
  const { t } = useTranslation("common");
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    pauseOnHover: true,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  const slides = [
    {
      image: images.Hero1,
      text: t("banner.titleOne"),
      isBlack: true,
    },
    {
      image: images.Hero2,
      text: t("banner.titleTwo"),
      isBlack: false,
    },
    {
      image: images.Hero3,
      text: t("banner.titleThree"),
      isBlack: false,
    },
    {
      image: images.Hero4,
      text: t("banner.titleThree"),
      isBlack: false,
    },
  ];

  const goToSlide = (slideIndex: any) => {
    sliderRef.current?.slickGoTo(slideIndex);
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="relative">
      <Slider {...settings} ref={sliderRef} className="m-0 p-0">
        {slides.map((slide, index) => (
          <div key={index} style={{ margin: 0, padding: 0 }}>
            <div className="relative overflow-hidden rounded-bl-[42px] rounded-br-[42px]">
              <Image
                src={slide.image}
                alt="picture"
                className="h-[550px] sm:h-[650px] md:h-[750px] lg:h-[885px] w-full object-cover transform scale-x-[-1] transition-transform duration-700 hover:scale-105"
              />
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-bl-[42px] rounded-br-[42px]" />
              <div className="absolute inset-0 bg-black/10 rounded-bl-[42px] rounded-br-[42px]" />
            </div>

            <div className="absolute inset-0 mt-[180px] sm:mt-[250px] lg:mt-[339px] flex flex-col text-white lg:w-[995px] max-w-[90%] mx-auto lg:max-w-full z-10">
              <SlideUp delay={0.1}>
                <h1
                  className={`text-white drop-shadow-xl text-[28px] sm:text-[34px] md:text-[38px] lg:text-[48px] leading-[38px] sm:leading-[42px] lg:leading-[100%] lg:tracking-[0%] font-bold text-center ${fontClass} transition-all duration-500`}
                >
                  {slide.text}
                </h1>
                <div className="mt-[18px] lg:mt-[25px] flex flex-col md:flex-row md:space-x-[24px] space-y-[10px] md:space-y-0 max-w-[90%] lg:max-w-full mx-auto lg:mx-0 justify-center items-center">
                  <Link href={"/contact-us"}>
                    <CButton
                      icon={
                        <Image
                          src={images.ArrowLong01}
                          alt="icon"
                          className="h-[24px] w-[24px] transition-transform duration-300"
                        />
                      }
                      className="bg-[#312783] hover:bg-[#3d2f9a] text-white rounded-[15px] w-full md:w-[350px] lg:w-[280px] h-[36px] lg:h-[52.37px] lg:text-[14.96px] lg:leading-[14.96px] lg:tracking-[20%] transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm border-none"
                    >
                      {t("banner.contact")}
                    </CButton>
                  </Link>
                  <Link href={"/our-services"}>
                    <CButton
                      icon={
                        <Image
                          src={images.ArrowLong01}
                          alt="icon"
                          className="h-[24px] w-[24px] transition-transform duration-300"
                        />
                      }
                      className="text-white hover:bg-white/10 rounded-[15px] w-full md:w-[350px] lg:w-[280px] h-[36px] lg:h-[52.37px] border-white hover:border-white/80 lg:text-[14.96px] lg:leading-[14.96px] lg:tracking-[20%] transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm"
                    >
                      {t("banner.service")}
                    </CButton>
                  </Link>
                </div>
              </SlideUp>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Arrows - Always Visible */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 shadow-xl"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 shadow-xl"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Custom Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative overflow-hidden rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-12 h-3 bg-white shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/70 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Banner;
