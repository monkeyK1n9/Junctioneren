import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Menu from "../ui/Menu";
import Image from "next/image";
import images from "../../../public/imgs";
import Link from "next/link";
import React from "react";
import SlideRight from "../Animation/SlideRight";
import SlideUp from "../Animation/SlideUp";

const fontClass = cn(RobotoUiDisplay.className, RobotoUiDisplay.variable);
const fontClassInter = cn(InterUiDisplay.className, InterUiDisplay.variable);

type ProjectProps = {
  picture: any;
  title: string;
  link: string;
  width?: any;
  height?: any;
};

const projectGrid01: ProjectProps[] = [
  {
    picture: images.Card1Img,
    title: "Une cité universitaire",
    link: "#",
  },
  {
    picture: images.Card1Img,
    title: "Une cité universitaire",
    link: "#",
  },
];

const projectGrid02: ProjectProps[] = [
  {
    picture: images.Card1Img,
    title: "Une cité universitaire",
    link: "#",
    width: 270,
    height: 255,
  },
  {
    picture: images.Card1Img,
    title: "Une cité universitaire",
    link: "#",
  },
  {
    picture: images.Card1Img,
    title: "Une cité universitaire",
    link: "#",
  },
];

const OurProjects = () => {
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[80%] lg:mx-auto">
      <SlideUp delay={0.5}>
        <div className="container mx-auto">
          <Menu
            title="Our Projects"
            titleLink="See all our projects"
            path="#"
            show
          />
          <div className="mt-[25px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] grid sm:grid-cols-12 gap-[20px] lg:gap-[30px] h-[400px] lg:h-[255px]">
            {projectGrid01.map((item, index) => (
              <div
                key={index}
                className="relative group sm:col-span-6 lg:col-span-6"
              >
                <Image
                  src={item.picture}
                  alt="picture"
                  className="h-full w-full rounded-[10px] object-cover"
                />
                <div className="w-full h-full absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
                  <div className="text-white text-center lg:py-[48px] lg:px-[60px]">
                    <h4
                      className={`text-[25px] sm:text-[30px] md:text-[40px] lg:text-[64px] lg:leading-[64px] tracking-[0%] font-bold ${fontClass} text-left`}
                    >
                      {item.title}
                    </h4>
                    <Link
                      href={String(item.link)}
                      className={`flex justify-start items-center ${fontClass} text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] text-center uppercase mt-[6px]`}
                    >
                      View More
                      <span className="ml-[6px]">
                        <Image
                          src={images.ArrowLong01}
                          alt="icon"
                          className="h-[24px] w-[24px]"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[10px] sm:mt-[20px] lg:mt-[30px] grid sm:grid-cols-12 gap-[20px] lg:gap-[30px] h-[400px] lg:h-[255px]">
            <div className="relative group col-span-12 sm:col-span-6 lg:col-span-3 h-full w-full">
              <div className="relative h-full w-full">
                <Image
                  src={images.Card2Img}
                  alt="picture"
                  className={`relative rounded-[10px] object-cover`}
                  layout="fill"
                />
              </div>
              <div className="lg:h-[255px] lg:w-full absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
                <div className="text-white text-center lg:py-[48px] lg:px-[60px]">
                  <h4
                    className={`text-[25px] sm:text-[30px] md:text-[40px] lg:text-[64px] lg:leading-[64px] tracking-[0%] font-bold ${fontClass} text-left`}
                  >
                    title
                  </h4>
                  <Link
                    href={"#"}
                    className={`flex justify-start items-center ${fontClass} text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] text-center uppercase mt-[6px]`}
                  >
                    View More
                    <span className="ml-[6px]">
                      <Image
                        src={images.ArrowLong01}
                        alt="icon"
                        className="h-[24px] w-[24px]"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group col-span-12 sm:col-span-6 w-full h-full">
              <div className="relative h-full w-full">
                <Image
                  src={images.Card3Img}
                  alt="picture"
                  className={`rounded-[10px] object-cover`}
                  layout="fill"
                />
              </div>
              <div className="w-full h-full absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
                <div className="text-white text-center lg:py-[48px] lg:px-[60px]">
                  <h4
                    className={`text-[25px] sm:text-[30px] md:text-[40px] lg:text-[64px] lg:leading-[64px] tracking-[0%] font-bold ${fontClass} text-left`}
                  >
                    title
                  </h4>
                  <Link
                    href={"#"}
                    className={`flex justify-start items-center ${fontClass} text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] text-center uppercase mt-[6px]`}
                  >
                    View More
                    <span className="ml-[6px]">
                      <Image
                        src={images.ArrowLong01}
                        alt="icon"
                        className="h-[24px] w-[24px]"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group col-span-12 sm:col-span-6 lg:col-span-3 w-full h-full">
              <div className="h-full w-full relative">
                <Image
                  src={images.Card4Img}
                  alt="picture"
                  className={`object-cover rounded-[10px]`}
                  layout="fill"
                />
              </div>
              <div className="w-full h-full absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
                <div className="text-white text-center lg:py-[48px] lg:px-[60px]">
                  <h4
                    className={`text-[25px] sm:text-[30px] md:text-[40px] lg:text-[64px] lg:leading-[64px] tracking-[0%] font-bold ${fontClass} text-left`}
                  >
                    title
                  </h4>
                  <Link
                    href={"#"}
                    className={`flex justify-start items-center ${fontClass} text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] text-center uppercase mt-[6px]`}
                  >
                    View More
                    <span className="ml-[6px]">
                      <Image
                        src={images.ArrowLong01}
                        alt="icon"
                        className="h-[24px] w-[24px]"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[55px] flex justify-center items-center">
            <button
              className={`bg-[#f1f1f1] rounded-[40px] lg:w-[355px] lg:h-[76px] ${fontClassInter} text-[14px] sm:text-[16px] lg:text-[20px] leading-[18px] sm:leading-[21px] lg:leading-[24.2px] flex items-center justify-center px-6 sm:px-4 lg:px-0`}
            >
              See our work process
              <span className="ml-[12px] sm:ml-[16px] lg:ml-[22px]">
                <Image
                  src={images.OrganigramImg}
                  alt="icon"
                  className="w-[20px] lg:w-[20px] h-[30px] lg:h-[50px]"
                />
              </span>
            </button>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default OurProjects;
