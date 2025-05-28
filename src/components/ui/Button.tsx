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
    "group font-normal uppercase text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] px-[21px] py-[10px] flex justify-center items-center border-[1px] border-black cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden",
    className
  );

  return (
    <div {...props} className={buttonClasses}>
      <span className="transition-transform duration-300 group-hover:-translate-x-2">
        {children}
      </span>

      {icon && (
        <span className="absolute right-[21px] opacity-0 translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          {icon}
        </span>
      )}

      {/* Alternative: Icon slides in from right with background effect */}
      {/* Uncomment this version if you prefer a sliding background effect */}
      {/*
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
      {icon && (
        <span className="absolute right-4 opacity-0 scale-75 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 z-10">
          {icon}
        </span>
      )}
      */}
    </div>
  );
};

export default CButton;
