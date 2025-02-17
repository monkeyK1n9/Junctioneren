import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Menu from "../ui/Menu";
import Image from "next/image";
import images from "../../../public/imgs";
import Link from "next/link";
import React from "react";

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
      <div className="container mx-auto">
        <Menu title="Our Projects" titleLink="See all our projects" path="#" />
        <div className="mt-[25px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] grid grid-cols-1 sm:grid-cols-2 gap-[20px] lg:gap-[30px]">
          {projectGrid01.map((item, index) => (
            <div key={index} className="relative group">
              <div>
                <Image
                  src={item.picture}
                  alt="picture"
                  className="lg:h-[255px] lg:w-[570px] rounded-[10px]"
                />
              </div>
              <div className="lg:w-[570px] lg:h-[255px] absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
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
        <div className="mt-[10px] sm:mt-[20px] lg:mt-[30px] flex flex-col sm:flex-row gap-[20px] lg:gap-[30px]">
          <div className="relative group">
            <div>
              <Image
                src={images.Card2Img}
                alt="picture"
                className={`lg:h-[255px] lg:w-[270px] rounded-[10px]`}
              />
            </div>
            <div className="lg:h-[255px] lg:w-[270px] absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
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
          <div className="relative group">
            <div>
              <Image
                src={images.Card3Img}
                alt="picture"
                className={`lg:h-[255px] lg:w-[470px] rounded-[10px]`}
              />
            </div>
            <div className="lg:w-[470px] lg:h-[255px] absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
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
          <div className="relative group">
            <div>
              <Image
                src={images.Card4Img}
                alt="picture"
                className={`lg:h-[255px] lg:w-[370px] rounded-[10px]`}
              />
            </div>
            <div className="lg:w-[370px] lg:h-[255px] absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-[10px]">
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
    </section>
  );
};

export default OurProjects;
