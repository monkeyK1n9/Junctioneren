import Image from "next/image";
import images from "../../../public/imgs";
import cn from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

type NavProps = {
  name: string;
  path: string;
};

const navs: NavProps[] = [
  {
    name: "Welcome",
    path: "/",
  },
  {
    name: "Our projects",
    path: "/our-projects",
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
    path: "/contact-us",
  },
];

const Header = () => {
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  return (
    <header className="z-50 h-[102px] sticky top-0 left-0 w-full bg-white shadow-sm">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full justify-between xl:justify-normal">
          <Link href={"/"}>
            <Image
              src={images.Logo2Img}
              alt="logo"
              className="h-[49.63px] w-[131px]"
            />
          </Link>
          <div className="flex lg:hidden">
            {!isOpen && <FaBars size={24} onClick={handleOpen} />}
            {isOpen && <AiFillCloseCircle size={30} onClick={handleOpen} />}
          </div>
          <ul className="hidden lg:flex lg:space-x-[40px]  xl:space-x-[58px] lg:pl-[390px] xl:pl-[415px]">
            {navs.map((item, index) => (
              <li key={index}>
                <Link
                  className={`uppercase ${fontClass} text-[12px] leading-[12px] tracking-[20%] font-normal ${
                    router.pathname === item.path
                      ? "border-t border-b border-[#DF4D1B] py-2 font-semibold"
                      : ""
                  } text-[#333333]`}
                  href={String(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isOpen && (
          <div className="z-50 bg-white rounded-md px-4 py-8">
            <ul className="flex flex-col space-y-4 text-center">
              {navs.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    router.pathname === item.path
                      ? "bg-[#DF4D1B] text-white font-semibold py-2 rounded-md"
                      : "text-[#333333]"
                  }`}
                >
                  <Link
                    className={`uppercase ${fontClass} text-[12px] w-full leading-[12px] tracking-[20%] font-normal`}
                    href={String(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
