import { RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Image from "next/image";
import Link from "next/link";
import images from "../../../public/imgs";

type MenuProps = {
  title: string;
  titleLink: string;
  path: string;
  show?: boolean;
};

const fontClass = cn(RobotoUiDisplay.className, RobotoUiDisplay.variable);

const Menu = ({ title, titleLink, path, show }: MenuProps) => (
  <div className="flex items-center flex-col sm:flex-row sm:justify-between">
    <h2
      className={`text-[25px] sm:text-[30px] md:text-[40px] lg:text-[64px] text-[#BDBDBD] lg:leading-[64px] tracking-[0%] font-light ${fontClass}`}
    >
      {title}
    </h2>
    {show && (
      <Link
        href={String(path)}
        className={`flex justify-center items-center ${fontClass} text-[#312783] text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] text-center uppercase transition-transform duration-300 hover:scale-110`}
      >
        {titleLink}
        <span className="ml-[6px]">
          <Image
            src={images.ArrowLong02}
            alt="icon"
            className="h-[24px] w-[24px]"
          />
        </span>
      </Link>
    )}
  </div>
);

export default Menu;
