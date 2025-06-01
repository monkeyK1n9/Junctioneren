import Image from "next/image";
import Menu from "../ui/Menu";
import { CommonText } from "../ui/Work";
import images from "../../../public/imgs";
import { FaLongArrowAltRight } from "react-icons/fa";

const OthersProjects = () => {
  return (
    <section className="pt-[20px] pb-[40px] lg:pb-[200px] lg:pt-[46px] lg:max-w-[80%] lg:mx-auto px-4 lg:px-0">
      <Menu
        title="Other projects"
        titleLink="See all galleries"
        path="#"
        show
      />
      <CommonText className="mt-[20px] lg:mt-[36px] text-center lg:text-left flex flex-col lg:flex-row items-center">
        <span className="mr-2 text-[#808080]">Interior design</span>
        <span className="hidden lg:flex">
          <FaLongArrowAltRight className="mr-2 text-[#808080]" />
        </span>
        Conception, Construction dans la ville de Yaoundé
      </CommonText>
      <div className="mt-[40px]">
        <div className="h-[300px] lg:h-[405px] relative">
          <Image
            src={images.OtherPic1}
            alt="picture"
            className={"h-[300px] lg:h-[405px] object-cover rounded-md"}
            layout="fill"
          />
        </div>
        <div className="grid grid-cols-1 mt-[30px] lg:grid-cols-2 justify-center items-center gap-[20px]">
          <Image
            src={images.OtherPic2}
            alt="picture"
            className={"h-[300px] lg:h-[355px] object-cover rounded-md"}
          />
          <Image
            src={images.OtherPic3}
            alt="picture"
            className={"h-[300px] lg:h-[355px] object-cover rounded-md"}
          />
        </div>
        <div className="grid grid-cols-1 mt-[30px] lg:grid-cols-2 justify-center items-center gap-[20px]">
          <Image
            src={images.OtherPic4}
            alt="picture"
            className={"h-[300px] lg:h-[255px] object-cover rounded-md"}
          />
          <Image
            src={images.OtherPic5}
            alt="picture"
            className={"h-[300px] lg:h-[255px] object-cover rounded-md"}
          />
        </div>
      </div>
      <CommonText className="mt-[20px] lg:mt-[36px] text-center lg:text-left flex flex-col lg:flex-row items-center">
        <span className="mr-2 text-[#808080]">Interior design</span>
        <span className="hidden lg:flex">
          <FaLongArrowAltRight className="mr-2 text-[#808080]" />
        </span>
        Our concepts
      </CommonText>
      <div className="py-[40px]">
        <div className="grid grid-cols-12 justify-center items-center gap-[20px]">
          <Image
            src={images.OtherPic6}
            alt="picture"
            className={
              "h-[300px] sm:h-[400px] lg:h-[550px] object-cover rounded-md col-span-12 lg:col-span-8"
            }
          />
          <Image
            src={images.OtherPic7}
            alt="picture"
            className={
              "h-[300px] sm:h-[400px] lg:h-[550px] object-cover rounded-md col-span-12 lg:col-span-4"
            }
          />
        </div>
        <div className="grid grid-cols-12 mt-[30px] justify-center items-center gap-[20px]">
          <Image
            src={images.OtherPic8}
            alt="picture"
            className={
              "h-[300px] sm:h-[300px] object-cover rounded-md col-span-12 lg:col-span-7"
            }
          />
          <Image
            src={images.OtherPic9}
            alt="picture"
            className={
              "h-[300px] sm:h-[300px] object-cover rounded-md col-span-12 lg:col-span-5"
            }
          />
        </div>
        <div className="grid grid-cols-12 mt-[30px] justify-center items-center gap-[20px]">
          <Image
            src={images.OtherPic10}
            alt="picture"
            className={
              "h-[300px] sm:h-[300px] object-cover rounded-md col-span-12 lg:col-span-6"
            }
          />
          <Image
            src={images.OtherPic11}
            alt="picture"
            className={
              "h-[300px] sm:h-[300px] object-cover rounded-md col-span-12 lg:col-span-6"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OthersProjects;
