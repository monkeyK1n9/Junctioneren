import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "../../../public/imgs";
import Menu from "../ui/Menu";
import { InterUiDisplay } from "@/lib/fonts";
import Image from "next/image";
import cn from "clsx";

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

const TextForm = ({ children, index, val, ...props }: TextFormProps) => (
  <div
    {...props}
    className={`
${index === val ? "w-full bg-white text-[#DF4D1B]" : "w-auto bg-transparent"} 
  `}
  >
    <h4
      className={`
        ${fontClass} ${
        index === val
          ? "w-full bg-white text-[#DF4D1B]"
          : "w-auto bg-transparent"
      } lg:text-[25px] xl:text-[36px] lg:leading-[35px] xl:leading-[47.57px] lg:tracking-[0%] font-normal transition-all duration-300 p-2 rounded-lg py-[30px] max-w-[637px]`}
    >
      {children}
    </h4>
  </div>
);

const datas: DataProps[] = [
  {
    title: "Construction management",
    path: "#",
    picture: images.Who1Img,
    shape: "rounded-md",
  },
  {
    title: "Construction et realisation d'infrastructure",
    path: "#",
    picture: images.Who1Img,
    shape: "rounded-full",
  },
  {
    title: "Design d'interieure de tout standing",
    path: "#",
    picture: images.Who1Img,
    shape: "rounded-tl-[50px] rounded-br-[50px]",
  },
  {
    title: "Batimet/ Maison intelligent",
    path: "#",
    picture: images.Who1Img,
    shape: "rounded-tr-[100px] rounded-bl-[100px]",
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f1f1f1] py-[30px] sm:py-[50px] md:py-[80px] lg:py-[131px] rounded-[43px]">
      <div className="lg:max-w-[80%] lg:mx-auto">
        <Menu
          title="What we do"
          titleLink="See all our services"
          path="#"
          show
        />
        <div className="relative lg:gap-[57px] lg:mt-[57px]">
          {/* Text Container */}
          <div className="w-full z-10">
            {datas.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(index)}
              >
                <TextForm
                  index={index}
                  val={activeIndex !== null ? activeIndex : undefined}
                >
                  {item.title}
                </TextForm>
              </div>
            ))}
          </div>

          <div className="absolute top-0 lg:right-[-80px] xl:right-[100px] z-0">
            <div className="relative lg:h-[513px] lg:w-[390px] flex-shrink-0">
              <AnimatePresence>
                {activeIndex !== null && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 overflow-hidden group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                      <Image
                        src={images.Rect1Img}
                        alt="rectangle"
                        className="w-full h-full"
                      />
                    </div>
                    <Image
                      src={datas[activeIndex].picture}
                      alt="picture"
                      className="w-9/12 h-9/12 object-cover absolute top-[50%] left-[50%]"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default Image */}
              {activeIndex === null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-lg overflow-hidden"
                >
                  <Image
                    src={datas[0].picture}
                    alt="default picture"
                    className="w-full h-full object-cover"
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
