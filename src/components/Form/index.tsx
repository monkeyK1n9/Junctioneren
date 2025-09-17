import React from "react";

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  textarea?: boolean;
  value?: string;
  text: string;
  onChange?: (e: any) => void;
}

const Form = ({ textarea, text, value, onChange, ...props }: FormProps) => {
  return (
    <div {...props}>
      {textarea ? (
        <textarea
          className="w-full p-2 bg-[#f3f3f3] rounded h-[147px] text-[#8D8D8D] text-[14px] px-[21px] py-[15px] leading-[16.41px] tracking-[4%]"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className="w-full h-[46px] py-[15px] px-[21px] bg-[#f3f3f3] rounded tracking-[4%] leading-[16.41px] text-[#8D8D8D] text-[14px]"
          placeholder={text}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Form;
