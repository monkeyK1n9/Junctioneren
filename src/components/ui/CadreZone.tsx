import Image from "next/image";
import images from "../../../public/imgs";
import cn from "clsx";
import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";

type CadreProps = {
  name: string;
  occupation: string;
  content: string;
  pic: any;
};

export const CadreZone = ({ content, name, occupation, pic }: CadreProps) => {
  const fontClassRoboto = cn(
    RobotoUiDisplay.className,
    RobotoUiDisplay.variable
  );
  const fontClassInter = cn(InterUiDisplay.className, InterUiDisplay.variable);

  return (
    <div className="relative group w-full max-w-[347px] h-auto mx-auto p-4 py-16 lg:py-0 sm:p-0">
      <div className="absolute top-[-40px] left-0 text-center lg:text-start w-full max-w-[246.16px] h-auto">
        <h4
          className={`${fontClassRoboto} text-[20px] sm:text-[24px] leading-[30px] sm:leading-[37.5px] uppercase`}
        >
          {name}
        </h4>
        <p
          className={`${fontClassRoboto} text-[10px] sm:text-[12px] leading-[15px] sm:leading-[18.75px] text-[#df4d1b] w-full max-w-[186px] font-[700]`}
        >
          {occupation}
        </p>
      </div>

      <div className="relative w-full max-w-[246.16px] mx-auto">
        <Image src={images.Cadre} alt="cadre" className="w-full h-auto" />
        <div className="absolute top-[8.7px] left-[-0.5px] right-0 w-full h-full flex justify-center">
          <Image
            src={pic}
            alt="picture"
            className="w-[87.27px] h-[87.27px] rounded-full"
          />
        </div>
        <div className="absolute top-[240px] lg:top-[110px] left-[50%] transform translate-x-[-50%] sm:left-[110px] lg:left-[240px] w-full max-w-[186px] text-justify">
          <p
            className={`${fontClassInter} text-[10px] sm:text-[12px] leading-[12px] sm:leading-[14.52px] text-[#BDBDBD]`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export const LargeCadreZone = ({
  content,
  name,
  occupation,
  pic,
}: CadreProps) => {
  const fontClassRoboto = cn(
    RobotoUiDisplay.className,
    RobotoUiDisplay.variable
  );
  const fontClassInter = cn(InterUiDisplay.className, InterUiDisplay.variable);

  return (
    <div className="relative group w-full max-w-[571px] h-auto mx-auto p-4 pb-[100px]">
      <div className="absolute top-[-30px] left-[70px] text-center lg:text-start w-full max-w-[571px] h-auto">
        <h4
          className={`${fontClassRoboto} text-[20px] sm:text-[24px] leading-[30px] sm:leading-[37.5px] uppercase`}
        >
          {name}
        </h4>
        <p
          className={`${fontClassRoboto} text-[10px] sm:text-[12px] leading-[15px] sm:leading-[18.75px] text-[#df4d1b] w-full max-w-[186px] font-[700]`}
        >
          {occupation}
        </p>
      </div>

      <div className="relative w-full max-w-[400px] mx-auto">
        <Image src={images.Cadre} alt="cadre" className="w-full h-auto" />
        <div className="absolute top-[16px] left-[-0.5px] right-0 w-full h-full flex justify-center">
          <Image
            src={pic}
            alt="picture"
            className="w-[137px] h-[137px] rounded-full"
          />
        </div>
        <div className="absolute top-[240px] lg:top-[150px] left-[50%] transform translate-x-[-50%] sm:left-[110px] lg:left-[520px] w-[502px] text-justify">
          <p
            className={`${fontClassInter} text-[10px] sm:text-[12px] leading-[12px] sm:leading-[14.52px] text-[#BDBDBD]`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
