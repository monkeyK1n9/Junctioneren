import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLanguage, IoChevronDown } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import cn from "clsx";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === router.locale) || languages[0];

  const handleLanguageChange = async (locale: string) => {
    if (locale === router.locale || isLoading) return;

    setIsLoading(true);
    setIsOpen(false);

    try {
      await router.push(router.pathname, router.asPath, { locale });
    } catch (error) {
      console.error("Language change failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200",
            "bg-white hover:bg-gray-50 transition-all duration-300",
            "shadow-sm hover:shadow-md",
            isOpen && "bg-gray-50 shadow-md",
            isLoading && "opacity-70 cursor-not-allowed"
          )}
          disabled={isLoading}
        >
          <FiGlobe className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
          </span>
          <IoChevronDown
            className={cn(
              "w-4 h-4 text-gray-500 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 min-w-[140px]"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200",
                    "hover:bg-gray-50",
                    router.locale === language.code
                      ? "bg-[#DF4D1B] text-white"
                      : "text-gray-700"
                  )}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                  {router.locale === language.code && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden flex gap-1">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={cn(
              "flex items-center gap-1 px-3 py-1.5 rounded-md transition-all duration-200",
              router.locale === language.code
                ? "bg-[#DF4D1B] text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
            disabled={isLoading}
          >
            <span className="text-sm">{language.flag}</span>
            <span className="text-xs font-medium">
              {language.code.toUpperCase()}
            </span>
          </button>
        ))}
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
          <div className="w-4 h-4 border-2 border-[#DF4D1B] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
