import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Menu from "../ui/Menu";
import Image from "next/image";
import images from "../../../public/imgs";
import Link from "next/link";
import React from "react";
import SlideUp from "../Animation/SlideUp";

const fontClass = cn(RobotoUiDisplay.className, RobotoUiDisplay.variable);
const fontClassInter = cn(InterUiDisplay.className, InterUiDisplay.variable);

type ProjectProps = {
  picture: any;
  title: string;
  link: string;
};

const projectGrid01: ProjectProps[] = [
  {
    picture: images.PUnMf,
    title: "Cité universitaire a Mfou",
    link: "#",
  },
  {
    picture: images.PuEy,
    title: "Cité universitaire a Eyang",
    link: "#",
  },
];

const projectGrid02: ProjectProps[] = [
  {
    picture: images.pNm,
    title: "Immeuble à but locatif a Nomayos",
    link: "#",
  },
  {
    picture: images.pJv,
    title: "Fairy Appartement Montée Jouvence",
    link: "#",
  },
  {
    picture: images.Card4Img,
    title: "Projet résidentiel premium",
    link: "#",
  },
];

type MyProps = {
  showBtn?: boolean;
};

const OurProjects = ({ showBtn }: MyProps) => {
  return (
    <section className="py-5 lg:py-12 container mx-auto px-4 lg:px-0">
      <SlideUp delay={0.5}>
        <div className="max-w-7xl mx-auto">
          <Menu
            title="Our Projects"
            titleLink="See all our projects"
            path="#"
            show
          />

          {/* First Grid Row */}
          <div className="mt-6 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {projectGrid01.map((item, index) => (
              <div
                key={index}
                className="relative group aspect-[4/3] lg:aspect-[5/3]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.picture}
                    alt={item.title}
                    className="rounded-lg object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-lg p-4">
                  <div className="text-white text-left p-4">
                    <h4
                      className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${fontClass}`}
                    >
                      {item.title}
                    </h4>
                    <Link
                      href={item.link}
                      className={`flex items-center mt-2 ${fontClass} text-xs lg:text-sm uppercase tracking-widest`}
                    >
                      View More
                      <span className="ml-2">
                        <Image
                          src={images.ArrowLong01}
                          alt="arrow"
                          width={24}
                          height={24}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Grid Row */}
          <div className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projectGrid02.map((item, index) => (
              <div key={index} className="relative group aspect-[4/3]">
                <div className="relative h-full w-full">
                  <Image
                    src={item.picture}
                    alt={item.title}
                    className="rounded-lg object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-lg p-4">
                  <div className="text-white text-left p-4">
                    <h4
                      className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${fontClass}`}
                    >
                      {item.title}
                    </h4>
                    <Link
                      href={item.link}
                      className={`flex items-center mt-2 ${fontClass} text-xs lg:text-sm uppercase tracking-widest`}
                    >
                      View More
                      <span className="ml-2">
                        <Image
                          src={images.ArrowLong01}
                          alt="arrow"
                          width={24}
                          height={24}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showBtn && (
            <div className="mt-8 sm:mt-10 lg:mt-14 flex justify-center">
              <button
                className={`bg-[#f1f1f1] rounded-full px-8 py-4 lg:px-12 lg:py-5 ${fontClassInter} text-base lg:text-xl flex items-center hover:bg-gray-200 transition-colors`}
              >
                See our work process
                <span className="ml-3 lg:ml-4">
                  <Image
                    src={images.OrganigramImg}
                    alt="process"
                    width={20}
                    height={20}
                    className="w-5 h-7 lg:w-6 lg:h-8"
                  />
                </span>
              </button>
            </div>
          )}
        </div>
      </SlideUp>
    </section>
  );
};

export default OurProjects;
