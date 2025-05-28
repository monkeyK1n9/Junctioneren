import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DefaultLayout } from "@/layouts/default.layout";
import Menu from "@/components/ui/Menu";
import cn from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

const ContactUS = () => {
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  const [isMapLoading, setIsMapLoading] = useState(true);

  const handleMapLoad = () => {
    setTimeout(() => {
      setIsMapLoading(false);
    }, 1500);
  };

  return (
    <DefaultLayout className="overflow-auto">
      <Header />
      <section className="my-[120px] md:my-[150px] lg:my-[180px] xl:my-[243px] container mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[30px] lg:mt-[22px]">
          {/* Information Section */}
          <div className="w-full col-span-12 lg:col-span-4 flex flex-col space-y-[15px] sm:space-y-[20px] lg:space-y-[10px] mb-[30px] lg:mb-0">
            <div>
              <Menu title="Contact" titleLink="" path="#" />
              <h4
                className={`text-[28px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[64px] text-black leading-[1.1] sm:leading-[1.2] lg:leading-[64px] tracking-[0%] font-bold ${fontClass} text-center lg:text-left`}
              >
                Information
              </h4>
            </div>
            <div className="flex flex-col space-y-[25px] sm:space-y-[30px] md:space-y-[35px] lg:space-y-[40px] xl:space-y-[50px]">
              <p
                className={`${fontClass} font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                Junctioner Construction Engineering
                <br />
                <span className="font-light">Before Tradex Simbock</span>
              </p>
              <p
                className={`${fontClass} font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                (+237) 695 977 562
              </p>
              <p
                className={`${fontClass} font-light text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                junctionerce@gmail.com
              </p>
              <button
                className={`${fontClass} font-normal text-[11px] sm:text-[12px] leading-[12px] tracking-[0.2em] sm:tracking-[20%] text-white bg-gradient-to-r from-[#312783] to-[#4c3ba3] hover:from-[#4c3ba3] hover:to-[#312783] uppercase p-[15px] sm:p-[20px] lg:p-[30px] rounded-lg w-full sm:w-auto lg:w-[221.81px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 mx-auto lg:mx-0`}
              >
                contact us
              </button>
            </div>
          </div>
          <div className="w-full col-span-12 lg:col-span-8 h-full">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[501px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-gray-200">
              {/* Loader élégant */}
              {isMapLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 z-10">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Animation de chargement */}
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
                      <div
                        className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-l-indigo-400 rounded-full animate-spin animate-reverse"
                        style={{ animationDuration: "1.5s" }}
                      ></div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span
                        className={`${fontClass} text-gray-600 font-medium text-sm sm:text-base`}
                      >
                        Chargement de la carte
                      </span>
                      <div className="flex space-x-1">
                        <div
                          className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 bg-red-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                </div>
              )}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.5200%2C3.8400%2C11.5500%2C3.8600&layer=mapnik&marker=3.8500%2C11.5350"
                className={`w-full h-full border-0 transition-opacity duration-700 ${
                  isMapLoading ? "opacity-0" : "opacity-100"
                }`}
                allowFullScreen={true}
                loading="lazy"
                title="Junctioner Construction Engineering Location"
                onLoad={handleMapLoad}
              />
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl border-2 border-white/50">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping opacity-30"></div>
                  </div>
                  <span
                    className={`${fontClass} text-xs sm:text-sm font-bold text-gray-800 drop-shadow-sm`}
                  >
                    Notre localisation
                  </span>
                </div>
              </div>
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-2 sm:p-3 shadow-xl border-2 border-white/50 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=3.8500,11.5350",
                    "_blank"
                  )
                }
                title="Ouvrir dans Google Maps"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors drop-shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 lg:right-auto lg:max-w-[350px]">
                <div className="bg-white/98 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-2xl border-2 border-white/60">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`${fontClass} text-xs sm:text-sm font-bold text-gray-900 drop-shadow-sm`}
                      >
                        Junctioner Construction Engineering
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default ContactUS;
