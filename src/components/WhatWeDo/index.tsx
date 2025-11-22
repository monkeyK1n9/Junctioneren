import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "../../../public/imgs";
import Menu from "../ui/Menu";
import { InterUiDisplay } from "@/lib/fonts";
import Image from "next/image";
import cn from "clsx";
import SlideRight from "../Animation/SlideRight";
import { useTranslation } from "next-i18next";

type DataProps = {
  title: string;
  path: string;
  picture: any;
  shape: string;
};

interface TextFormProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  index?: number;
  val?: number;
}

const fontClass = cn(InterUiDisplay.className, InterUiDisplay.variable);

const TextForm = ({
  children,
  index,
  val,
  path,
  ...props
}: TextFormProps & { path?: string }) => (
  <div
    {...props}
    className={`
      relative flex items-center justify-center lg:justify-between lg:h-[100px]
    `}
  >
    {/* Highlight background that extends to screen edges */}
    {index === val && (
      <div
        className="flex justify-between absolute inset-0 left-1/2 -translate-x-1/2 w-screen h-full bg-white z-0 transition-all duration-300"
        aria-hidden="true"
      />
    )}
    <h4
      className={`
        ${fontClass}
        relative z-10
        lg:max-w-[637px]
        ${index === val ? "text-[#DF4D1B]" : "text-inherit"}
        lg:text-[25px] xl:text-[36px] lg:leading-[35px] xl:leading-[47.57px] lg:tracking-[0%] font-normal transition-all duration-300 p-2 rounded-lg
      `}
    >
      {children}
    </h4>
    {index === val && path && (
      <div className="relative h-[80px]">
        <a
          href={path}
          className="hidden lg:flex items-center justify-center w-[80px] h-[80px] bg-[#DF4D1B] rounded-full shadow-lg transition-colors border-[7px] border-[#312783] absolute z-10"
        >
          <Image
            src={images.ArrowTopRigth}
            alt="pict"
            className="w-[36px] h-[36px]"
          />
        </a>
      </div>
    )}
  </div>
);

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { t } = useTranslation("common");

  const datas: DataProps[] = [
    {
      title: t("whatWeDo.one"),
      path: "/our-services",
      picture: images.WWDManag,
      shape: "rounded-md",
    },
    {
      title: t("whatWeDo.two"),
      path: "/our-services",
      picture: images.WWDInfras,
      shape: "rounded-full",
    },
    {
      title: t("whatWeDo.three"),
      path: "/our-services",
      picture: images.WWDDesign,
      shape: "rounded-tl-[50px] rounded-br-[50px]",
    },
    {
      title: t("whatWeDo.four"),
      path: "/our-services",
      picture: images.WWDIntell,
      shape: "rounded-tr-[100px] rounded-bl-[100px]",
    },
  ];

  return (
    <section className="bg-[#f1f1f1] py-[30px] sm:py-[50px] md:py-[80px] lg:py-[131px] rounded-[43px] overflow-hidden">
      <div className="lg:max-w-[1170px] lg:mx-auto">
        <Menu
          title={t("whatWeDo.title")}
          titleLink={t("whatWeDo.seeAll")}
          path="/our-services"
          show
        />
        <div className="relative lg:gap-[57px] lg:mt-[57px]">
          {/* Text Container */}
          <SlideRight delay={0.4}>
            <div className="w-full z-10">
              {datas.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(index)}
                  className="text-center lg:text-left lg:mb-[25px]"
                >
                  <TextForm
                    index={index}
                    path={item.path}
                    val={activeIndex !== null ? activeIndex : undefined}
                  >
                    {item.title}
                  </TextForm>
                </div>
              ))}
            </div>
          </SlideRight>

          {/* Extended white lines to edges */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top line extending to edges */}
            <div className="absolute top-0 left-[-100px] right-[-100px] h-[1px] bg-white opacity-20"></div>
            {/* Bottom line extending to edges */}
            <div className="absolute bottom-0 left-[-100px] right-[-100px] h-[1px] bg-white opacity-20"></div>
            {/* Left line extending to edges */}
            <div className="absolute top-[-100px] bottom-[-100px] left-0 w-[1px] bg-white opacity-20"></div>
            {/* Right line extending to edges */}
            <div className="absolute top-[-100px] bottom-[-100px] right-0 w-[1px] bg-white opacity-20"></div>
          </div>

          <div className="absolute top-0 lg:right-[-80px] xl:right-[300px] z-0">
            <div className="relative sm:ml-[35%] lg:h-[400px] lg:w-[350.65px] flex-shrink-0">
              <AnimatePresence>
                {activeIndex !== null && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 overflow-hidden group rounded-2xl"
                  >
                    <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={images.Rect1Img}
                        alt="rectangle"
                        className="w-[400px] h-[400px]"
                      />
                      <Image
                        src={images.Rect2Img}
                        alt="rectangle"
                        className="absolute w-[300px] h-[320px]"
                      />
                      <Image
                        src={images.Rect3Img}
                        alt="rectangle"
                        className="absolute w-[300px] h-[380px]"
                      />
                    </div>
                    <Image
                      src={datas[activeIndex].picture}
                      alt="picture"
                      className="w-9/12 h-9/12 object-cover absolute top-[50%] left-[50%] rounded-2xl"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default Image with rounded corners */}
              {activeIndex === null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={datas[0].picture}
                    alt="default picture"
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
