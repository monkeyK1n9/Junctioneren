import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import images from "../../../public/imgs";
import Menu from "../ui/Menu";
import cn from "clsx";
import { InterUiDisplay } from "@/lib/fonts";
import SlideUp from "../Animation/SlideUp";
import { useTranslation } from "next-i18next";

const fontClass = cn(InterUiDisplay.variable, InterUiDisplay.className);

interface TextAboutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

type DataProps = {
  title: string;
  picture: any;
  path: string;
};

const CardPicture = ({ picture, title }: { picture: any; title: string }) => {
  return (
    <div className="relative h-[255px] w-[438px]">
      <Image
        src={picture}
        alt="picture"
        className="relative rounded-[10px] w-full h-full object-cover"
        layout="fill"
      />
      <div className="absolute inset-0 bg-black opacity-5 rounded-[10px]" />
      <div className="absolute inset-0 rounded-[10px] flex justify-center items-center">
        <TextAbout className="text-white cursor-text">{title}</TextAbout>
      </div>
    </div>
  );
};

const TextAbout = ({ children, ...props }: TextAboutProps) => (
  <h4
    {...props}
    className={`
      ${fontClass}
      text-center
      text-[34px] sm:text-[40px] xl:text-[44px] 2xl:text-[48px]
      leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] xl:leading-[1]
      tracking-[0%] font-normal
      my-2 sm:my-8 lg:my-10
      ${props.className || ""}
    `}
  >
    {children}
  </h4>
);

const WhoWeAre = () => {
  const { t } = useTranslation("common");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(4);

  const datas: DataProps[] = [
    {
      path: "#",
      picture: images.wwaYoung,
      title: t("whoWeAre.team"),
    },
    {
      path: "#",
      picture: images.wwaAmb,
      title: t("whoWeAre.amb"),
    },
    {
      path: "#",
      picture: images.wwaDream,
      title: t("whoWeAre.dream"),
    },
    {
      path: "#",
      picture: images.Card4Img,
      title: t("whoWeAre.bestTeam"),
    },
    {
      path: "#",
      picture: images.wwaCam,
      title: t("whoWeAre.cam"),
    },
    {
      path: "#",
      picture: images.wwaEng,
      title: t("whoWeAre.eng"),
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="mt-[30px] sm:mt-[40px] md:mt-[60px] lg:mt-[76px] grid grid-cols-12 gap-[10px] sm:gap-[20px]">
        {datas.map((item, index) => (
          <div
            key={index}
            className="col-span-12 lg:col-span-4 relative text-[#B9B9B9]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)}
          >
            <div
              className={`flex justify-center items-center text-[#B9B9B9] ${
                hoveredIndex === index ? "hidden" : "flex"
              }`}
            >
              <TextAbout className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px]">
                {item.title}
              </TextAbout>
              {index < datas.length - 1 && index !== 2 && (
                <div className="hidden flex-1 lg:flex justify-center">
                  <TextAbout>/</TextAbout>
                </div>
              )}
            </div>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-24 text-white z-50 hidden lg:flex"
                >
                  <CardPicture picture={item.picture} title={item.title} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
