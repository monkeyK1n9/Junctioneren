import Image from "next/image";
import Link from "next/link";
import images from "../../../public/imgs";
import { RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";

type NavProps = {
  name?: string;
  path?: string;
  icon?: any;
};

const blogOne: NavProps[] = [
  {
    name: "Welcome",
    path: "#",
  },
  {
    name: "Our Projects",
    path: "#",
  },
  {
    name: "What we do",
    path: "#",
  },
  {
    name: "Who we are",
    path: "#",
  },
  {
    name: "Contacts",
    path: "#",
  },
];

const blogThree: NavProps[] = [
  {
    path: "#",
    icon: (
      <Image src={images.FacebookImg} alt="pic" className="w-[10px] h-[19px]" />
    ),
  },
  {
    path: "#",
    icon: (
      <Image src={images.TwitterImg} alt="pic" className="w-[10px] h-[19px]" />
    ),
  },
  {
    path: "#",
    icon: (
      <Image src={images.LinkedinImg} alt="pic" className="w-[10px] h-[19px]" />
    ),
  },
  {
    path: "#",
    icon: (
      <Image
        src={images.PinterestImg}
        alt="pic"
        className="w-[10px] h-[19px]"
      />
    ),
  },
];

const blogTwo: NavProps[] = [
  {
    name: "Before Tradex Simbock",
    icon: (
      <Image
        src={images.LocationImg}
        alt="pic"
        className="w-[13.2px] h-[16px]"
      />
    ),
  },
  {
    name: "(+237) 695 977 562",
    icon: (
      <Image src={images.PhoneImg} alt="pic" className="w-[13.2px] h-[16px]" />
    ),
  },
  {
    name: "junctionerCE@gmail.com",
    icon: (
      <Image src={images.MailImg} alt="pic" className="w-[13.2px] h-[16px]" />
    ),
  },
];

const Footer = () => {
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  return (
    <footer className="bg-gray py-[10px] lg:py-[24px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Image
              src={images.LogoImg}
              alt="logo"
              className="h-[70.88px] w-[187px]"
            />
          </div>
          <div className="flex flex-col pt-[10px] lg:pt-0">
            <h4
              className={`text-white text-[14px] leading-[24px] tracking-[3%] font-bold ${fontClass}`}
            >
              Information
            </h4>
            <ul className="flex flex-col space-y-[3px] md:space-y-[10px] pt-[10px] lg:pt-[25px]">
              {blogOne.map((item, index) => (
                <li key={index}>
                  <Link
                    href={String(item.path)}
                    className={`${fontClass} text-white text-[14px] leading-[24px] tracking-[3%]`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-[14px] lg:pt-0">
            <h4
              className={`${fontClass} text-white text-[14px] leading-[24px] tracking-[3%] font-bold`}
            >
              Contacts
            </h4>
            <ul className="flex flex-col space-y-[4px] md:space-y-[10px] pt-[10px] lg:pt-[25px]">
              {blogTwo.map((item, index) => (
                <li key={index}>
                  <p
                    className={`${fontClass} text-white text-[14px] leading-[24px] tracking-[3%] flex items-center`}
                  >
                    <span className="mr-[12.8px]">{item.icon}</span> {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex" />
          <div className="pt-[14px] lg:pt-0">
            <h4
              className={`${fontClass} text-white text-[14px] leading-[24px] tracking-[3%] font-bold`}
            >
              Social Media
            </h4>
            <ul className="flex space-x-4 lg:space-x-[40px] py-[10px] lg:py-[24px]">
              {blogThree.map((item, index) => (
                <li key={index}>
                  <Link
                    href={String(item.path)}
                    className={`${fontClass} text-white text-[14px] leading-[24px] tracking-[3%]`}
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
            <h4
              className={`${fontClass} text-white text-[14px] leading-[24px] tracking-[3%] font-bold`}
            >
              Junctioner Construction Engineering
            </h4>
          </div>
        </div>
        <div className="h-[0.2px] bg-gray-400 my-[10px] lg:my-[24px]" />
        <p
          className={`${fontClass} text-[#C8C8C880] text-[14px] leading-[24px] tracking-[3%] text-center`}
        >
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
