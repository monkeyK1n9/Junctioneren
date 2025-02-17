import Image from "next/image";
import images from "../../../public/imgs";
import cn from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";

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

const Header = () => {
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  const router = useRouter();
  return (
    <header className="absolute inset-0 top-0 left-0 z-10 h-[102px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full justify-between xl:justify-normal">
          <Image
            src={images.Logo2Img}
            alt="logo"
            className="h-[49.63px] w-[131px]"
          />
          <div className="flex lg:hidden">
            <FaBars size={24} />
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
      </div>
    </header>
  );
};

export default Header;
