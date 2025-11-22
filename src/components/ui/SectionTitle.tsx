import React from "react";

const SectionTitle = ({
  title,
  description,
  fontTitle = "",
  fontText = "",
}: {
  title: string;
  description: string;
  fontTitle: string;
  fontText: string;
}) => {
  return (
    <div className="w-full mt-[10px] sm:mt-[15px] lg:mt-[29px] mb-[20px] sm:mb-[30px] lg:mb-[44px]">
      <div className="flex items-start">
        <span
          className={`${fontTitle}
            text-[#b9b9b9]
            text-[34px] sm:text-[40px] xl:text-[44px] 2xl:text-[48px]
            leading-none mr-4 sm:mr-6 lg:mr-10
          `}
        >
          /
        </span>

        <h4
          className={`${fontTitle}
            text-[#b9b9b9]
            text-[34px] sm:text-[40px] xl:text-[44px] 2xl:text-[48px]
            leading-[1.1] font-normal
          `}
        >
          {title}
        </h4>
      </div>

      {description && (
        <p
          className={`${fontText}
            mt-4 text-black font-[400]
            text-[12px] sm:text-[13px] leading-[18px]
            max-w-[750px]
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
