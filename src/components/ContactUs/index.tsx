import Image from "next/image";
import Menu from "../ui/Menu";
import images from "../../../public/imgs";
import Form from "../Form";
import SlideUp from "../Animation/SlideUp";
import { FaArrowCircleRight, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[891px] lg:mx-auto lg:my-[95px]">
      <SlideUp delay={0.3}>
        <div className="mx-auto">
          <Menu title="Contact Us" titleLink="" path="#" />
          <div className="grid grid-cols-12 lg:mt-[22px] gap-[10px] sm:gap-[20px] lg:gap-[30px] h-[369px]">
            <div className="w-full col-span-12 lg:col-span-5 flex flex-col space-y-[10px]">
              <Form text="Name" />
              <Form text="Phone Number*" />
              <Form text="Email" />
              <Form text="interested in" />
              <Form textarea text="Message*" />
            </div>
            <div className="w-full col-span-12 lg:col-span-7 h-full hidden lg:flex">
              <Image
                src={images.ContactImg}
                alt="picture"
                className="relative object-cover lg:w-[749px] lg:h-[369px] rounded"
              />
            </div>
          </div>
          <div className="mt-[20px] lg:mt-[50px] flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-[50px]">
            <button className="flex justify-center items-center text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium">
              Send email
              <span className="pl-[4px]">
                <FaArrowRight />
              </span>
            </button>
            <div
              className="rounded-full bg-[#F3F3F3] px-[25px] py-[6px] text-center flex justify-center items-center cursor-pointer"
              onClick={() => window.open("https://wa.me/+23769", "_blank")}
            >
              <FaWhatsapp color="green" size={27} className="mr-[14px]" />
              <p className="text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium">
                Contact us on whatsapp
              </p>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default ContactUs;
