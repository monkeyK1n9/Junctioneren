import React, { ReactNode } from "react";
import cx from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";

interface CButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  icon?: React.ReactNode;
}

const CButton = ({ children, icon, className, ...props }: CButtonProps) => {
  const fontClass = cx(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  const buttonClasses = cx(
    fontClass,
    "font-normal uppercase text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] px-[21px] py-[10px] flex justify-center items-center border-[1px] border-black cursor-pointer transition-transform duration-300 hover:scale-105",
    className
  );
  return (
    <div {...props} className={buttonClasses}>
      {children}
      <span className="ml-[40px] transition-transform duration-300 group-hover:rotate-45">
        {icon}
      </span>
    </div>
  );
};

export default CButton;
