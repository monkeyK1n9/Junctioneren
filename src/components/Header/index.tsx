import Image from "next/image";
import images from "../../../public/imgs";
import cn from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "next-i18next";

type NavProps = {
  name: string;
  path: string;
};

const Header = () => {
  const { t } = useTranslation("common");
  const navs: NavProps[] = [
    {
      name: t("navigation.welcome"),
      path: "/",
    },
    {
      name: t("navigation.projects"),
      path: "/our-projects",
    },
    {
      name: t("navigation.whatWeDo"),
      path: "#",
    },
    {
      name: t("navigation.whoWeAre"),
      path: "/who-we-are",
    },
    {
      name: t("navigation.contact"),
      path: "/contact-us",
    },
  ];
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <header className="z-50 h-[102px] sticky top-0 left-0 w-full bg-white shadow-sm">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src={images.Logo2Img}
              alt="logo"
              className="h-[40px] sm:h-[49.63px] w-[120px] sm:w-[131px] transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-[40px] xl:space-x-[58px]">
              {navs.map((item, index) => (
                <li
                  key={index}
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Link
                    className={`uppercase ${fontClass} text-[12px] leading-[12px] tracking-[20%] font-normal ${
                      router.pathname === item.path
                        ? "border-t border-b border-[#DF4D1B] py-2 font-semibold"
                        : ""
                    } text-[#333333] hover:text-[#DF4D1B] transition-colors duration-200`}
                    href={String(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side: Language Switcher + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1"
              onClick={handleOpen}
              aria-label="Toggle menu"
            >
              {!isOpen && (
                <FaBars
                  size={24}
                  className="text-gray-700 hover:text-[#DF4D1B] transition-colors duration-200"
                />
              )}
              {isOpen && (
                <AiFillCloseCircle
                  size={30}
                  className="text-[#DF4D1B] hover:text-red-600 transition-colors duration-200"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu-container lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
            <div className="container mx-auto">
              <div className="px-4 py-6">
                <ul className="flex flex-col space-y-4">
                  {navs.map((item, index) => (
                    <li key={index}>
                      <Link
                        className={cn(
                          `block uppercase ${fontClass} text-[14px] leading-[16px] tracking-[20%] font-normal py-3 px-4 rounded-lg transition-all duration-200`,
                          router.pathname === item.path
                            ? "bg-[#DF4D1B] text-white font-semibold shadow-sm"
                            : "text-[#333333] hover:bg-gray-50 hover:text-[#DF4D1B]"
                        )}
                        href={String(item.path)}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
