import Image from "next/image";
import images from "../../../public/imgs";
import Header from "../Header";
import cn from "clsx";
import { InterUiDisplay } from "@/lib/fonts";
import CButton from "../ui/Button";
import SlideUp from "../Animation/SlideUp";

const Banner = () => {
  const fontClass = cn(InterUiDisplay.variable, InterUiDisplay.className);
  return (
    <section className="relative">
      <Header />
      <Image
        src={images.BannerImg}
        alt="picture"
        className="h-[550px] sm:h-[650px] md:h-[750px] lg:h-[885px] w-full object-cover rounded-bl-[42px] rounded-br-[42px] transform scale-x-[-1] "
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 rounded-bl-[42px] rounded-br-[42px]" />
      <div className="absolute inset-0 mt-[180px] sm:mt-[250px] lg:mt-[339px] flex flex-col text-white lg:ml-[234px] lg:w-[685px] max-w-[90%] mx-auto lg:max-w-full">
        <SlideUp delay={0.1}>
          <h1
            className={`text-[28px] sm:text-[34px] md:text-[38px] lg:text-[48px] leading-[38px] sm:leading-[42px] lg:leading-[58.09px] lg:tracking-[0%] font-bold text-center lg:text-left ${fontClass}`}
          >
            Gagnez du temps, de la confiance et des ressources avec notre
            expérience
          </h1>
          <div className="mt-[18px] lg:mt-[25px] flex flex-col md:flex-row md:space-x-[24px] space-y-[10px] md:space-y-0 max-w-[85%] lg:max-w-full mx-auto lg:mx-0">
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
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Banner;
