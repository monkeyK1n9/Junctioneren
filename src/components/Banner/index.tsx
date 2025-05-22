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

const Banner = () => {
  const fontClass = cn(InterUiDisplay.variable, InterUiDisplay.className);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const slides = [
    {
      image: images.Hero1,
      text: "Gagnez du temps, de la confiance et des ressources avec notre expérience",
      isBlack: true,
    },
    {
      image: images.Hero2,
      text: "Your dreams and myths are our daily realities",
      isBlack: false,
    },
    {
      image: images.Hero3,
      text: "Your dreams and myths are our daily realities",
      isBlack: false,
    },
  ];

  return (
    <section className="relative">
      <Slider {...settings} className="m-0 p-0">
        {slides.map((slide, index) => (
          <div key={index} style={{ margin: 0, padding: 0 }}>
            <Image
              src={slide.image}
              alt="picture"
              className="h-[550px] sm:h-[650px] md:h-[750px] lg:h-[885px] w-full object-cover rounded-bl-[42px] rounded-br-[42px] transform scale-x-[-1]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-bl-[42px] rounded-br-[42px] h-[550px] lg:h-[885px]" />
            <div className="absolute inset-0 mt-[180px] sm:mt-[250px] lg:mt-[339px] flex flex-col text-white lg:w-[995px] max-w-[90%] mx-auto lg:max-w-full">
              <SlideUp delay={0.1}>
                <h1
                  className={`text-[28px] sm:text-[34px] md:text-[38px] lg:text-[48px] leading-[38px] sm:leading-[42px] lg:leading-[100%] lg:tracking-[0%] font-bold text-center ${fontClass} ${
                    slide.isBlack ? "text-black" : "text-white"
                  }`}
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
                          className="h-[24px] w-[24px]"
                        />
                      }
                      className="bg-[#312783] text-white rounded-[15px] w-full md:w-[350px] lg:w-[280px] h-[36px] lg:h-[52.37px] lg:text-[14.96px] lg:leading-[14.96px] lg:tracking-[20%]"
                    >
                      Contact us now
                    </CButton>
                  </Link>
                  <Link href={"/our-services"}>
                    <CButton
                      icon={
                        <Image
                          src={images.ArrowLong01}
                          alt="icon"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      className="text-white rounded-[15px] w-full md:w-[350px] lg:w-[280px] h-[36px] lg:h-[52.37px] border-white lg:text-[14.96px] lg:leading-[14.96px] lg:tracking-[20%]"
                    >
                      See our services
                    </CButton>
                  </Link>
                </div>
              </SlideUp>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
