import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import images from "../../../public/imgs";
import Menu from "../ui/Menu";
import cn from "clsx";
import { InterUiDisplay } from "@/lib/fonts";
import SlideUp from "../Animation/SlideUp";

const fontClass = cn(InterUiDisplay.variable, InterUiDisplay.className);

interface TextAboutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

type DataProps = {
  title: string;
  picture: any;
  path: string;
};

const datas: DataProps[] = [
  {
    path: "#",
    picture: images.Card2Img,
    title: "Young Team",
  },
  {
    path: "#",
    picture: images.Card1Img,
    title: "Ambitious",
  },
  {
    path: "#",
    picture: images.Card3Img,
    title: "Dreamers",
  },
  {
    path: "#",
    picture: images.Card4Img,
    title: "Best team",
  },
  {
    path: "#",
    picture: images.Card2Img,
    title: "Cameroonians",
  },
  {
    path: "#",
    picture: images.Card5Img,
    title: "Engineers",
  },
];

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
    className={`${fontClass} lg:text-[45px] xl:text-[64px] lg:leading-[65px] xl:leading-[77.45px] tracking-[0%] font-normal`}
  >
    {children}
  </h4>
);

const WhoWeAre = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f1f1f1] py-[30px] sm:py-[50px] md:py-[80px] lg:py-[131px] rounded-[43px]">
      <SlideUp delay={0.3}>
        <div className="lg:max-w-[80%] lg:mx-auto">
          <Menu
            title="Who we are"
            titleLink="learn more about us"
            path="#"
            show
          />
        </div>
        <div className="container mx-auto">
          <div className="mt-[30px] sm:mt-[40px] md:mt-[60px] lg:mt-[76px] grid grid-cols-12 gap-[20px] lg:gap-[40px]">
            {datas.map((item, index) => (
              <div
                key={index}
                className="col-span-6 lg:col-span-4 relative text-[#B9B9B9]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex justify-center items-center text-[#B9B9B9]">
                  <TextAbout className="lg:w-[98%]">{item.title}</TextAbout>
                  {index < datas.length - 1 && index !== 2 && (
                    <div className="pl-[26.1px] hidden lg:flex w-[2%]">
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
      </SlideUp>
    </section>
  );
};

export default WhoWeAre;
