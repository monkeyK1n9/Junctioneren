import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Menu from "../ui/Menu";
import Image from "next/image";
import images from "../../../public/imgs";
import Link from "next/link";
import React, { useState } from "react";
import SlideUp from "../Animation/SlideUp";
import { useTranslation } from "next-i18next";
import Breadcrumb from "../Breadcrumb";
import { useRouter } from "next/router";

const fontClass = cn(RobotoUiDisplay.className, RobotoUiDisplay.variable);
const fontClassInter = cn(InterUiDisplay.className, InterUiDisplay.variable);

type ProjectProps = {
  picture: any;
  title: string;
  link: string;
};

type MyProps = {
  showBtn?: boolean;
  showBreadcrumb?: boolean;
};

const OurProjects = ({ showBtn, showBreadcrumb }: MyProps) => {
  const { t } = useTranslation("common");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const router = useRouter();

  const projectGrid01: ProjectProps[] = [
    {
      picture: images.PNsfai,
      title: t("projects.titleOne"),
      link: "/our-projects/s-nfai",
    },
    {
      picture: images.PUnMf,
      title: t("projects.titleTwo"),
      link: "/our-projects/cite-universitaire-eyang",
    },
  ];

  const projectGrid02: ProjectProps[] = [
    {
      picture: images.PuEy,
      title: t("projects.titleThree"),
      link: "/our-projects/immeuble-nomayos",
    },
    {
      picture: images.pNm,
      title: t("projects.titleFour"),
      link: "/our-projects/fairy-jouvence",
    },
    {
      picture: images.pJv,
      title: t("projects.titleFive"),
      link: "/our-projects/residence-premium",
    },
  ];

  return (
    <section className="py-5 lg:py-12 px-4 lg:px-0">
      <SlideUp delay={0.5}>
        <div className="lg:max-w-[1170px] lg:mx-auto mt-[120xp] lg:mt-[100px]">
          <div className="pt-[100px] lg:pt-[50px]">
            <Menu
              title={t("projects.title")}
              titleLink={t("projects.viewAll")}
              path="/our-projects/all-our-projects"
              show
            />
          </div>

          {/* First Grid Row */}
          <div className="mt-6 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {projectGrid01.map((item, index) => (
              <div
                key={index}
                className="relative group aspect-[4/3] lg:aspect-[5/3] cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => router.push(item.link)}
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
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-lg p-4
                    ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                >
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
                      {t("projects.more")}
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
            {projectGrid02.map((item, index) => {
              const globalIndex = index + projectGrid01.length;
              return (
                <div
                  key={globalIndex}
                  className="relative group aspect-[4/3] cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => router.push(item.link)}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.picture}
                      alt={item.title}
                      className="rounded-lg object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-[#312783] bg-opacity-80 rounded-lg p-4
                    ${
                      hoveredIndex === globalIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
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
              );
            })}
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default OurProjects;
