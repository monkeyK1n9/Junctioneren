import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import { ReactNode } from "react";

type WorkProps = {
  title: string;
  description: string;
};

interface CommonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const fontClassRoboto = cn(RobotoUiDisplay.className, RobotoUiDisplay.variable);
const fontClassInter = cn(InterUiDisplay.className, InterUiDisplay.variable);

export const CommonText = ({
  children,
  className,
  ...props
}: CommonTextProps) => {
  return (
    <p
      {...props}
      className={cn(
        "text-black ${fontClassInter} font-[300] tracking-[0] leading-[19.36px] text-[16px]",
        fontClassInter,
        className
      )}
    >
      {children}
    </p>
  );
};

export const Work = ({ description, title }: WorkProps) => {
  return (
    <div className="rounded-[10px] py-[26px] px-[20px] flex flex-col gap-[10px] border-[1px] border-[#BDBDBD] lg:w-[320px] xl:w-[310px] lg:h-[127px]">
      <h4
        className={`text-[#312783] ${fontClassRoboto} uppercase font-bold tracking-[20%] leading-[12px] text-[16px] lg:w-[306px]`}
      >
        {title}
      </h4>
      <CommonText className="lg:w-[306px]">{description}</CommonText>
    </div>
  );
};
