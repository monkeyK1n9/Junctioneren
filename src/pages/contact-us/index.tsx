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
    }, 1500); // Délai pour une transition fluide
  };
  return (
    <DefaultLayout className="overflow-auto">
      <Header />
      <section className="my-[150px] sm:my-[180px] lg:my-[243px] container mx-auto flex flex-col">
        <div className="grid grid-cols-12 lg:mt-[22px] gap-[10px] sm:gap-[20px] lg:gap-[30px] lg:h-[501px]">
          <div className="w-full col-span-12 lg:col-span-4 flex flex-col space-y-[10px]">
            <div>
              <Menu title="Contact" titleLink="" path="#" />
              <h4
                className={`text-[25px] sm:text-[30px] md:text-[40px] lg:text-[64px] text-black lg:leading-[64px] tracking-[0%] font-bold ${fontClass} text-center sm:text-left`}
              >
                Information
              </h4>
            </div>
            <div className="flex flex-col space-y-[20px] sm:space-y-[30px] lg:space-y-[40px] xl:space-y-[50px]">
              <p
                className={`${fontClass} font-bold lg:text-[18px] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                Junctioner Construction Engineering
                <br />
                <span className="font-light">Before Tradex Simbock</span>
              </p>
              <p
                className={`${fontClass} font-bold lg:text-[18px] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                (+237) 695 977 562
              </p>
              <p
                className={`${fontClass} font-light lg:text-[18px] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                junctionerce@gmail.com
              </p>
              <button
                className={`${fontClass} font-normal lg:text-[12px] lg:leading-[12px] lg:tracking-[20%] text-white bg-gradient-to-r from-[#312783] to-[#4c3ba3] hover:from-[#4c3ba3] hover:to-[#312783] uppercase p-[12px] rounded-lg lg:p-[30px] lg:w-[221.81px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                contact us
              </button>
            </div>
          </div>
          <div className="w-full col-span-12 lg:col-span-8 h-full pt-[20px] lg:pt-0">
            <div className="relative w-full lg:w-[1046px] lg:h-[501px] min-h-[300px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-gray-200">
              {/* Loader élégant */}
              {isMapLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 z-10">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Animation de chargement */}
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
                      <div
                        className="absolute inset-0 w-16 h-16 border-4 border-transparent border-l-indigo-400 rounded-full animate-spin animate-reverse"
                        style={{ animationDuration: "1.5s" }}
                      ></div>
                    </div>

                    {/* Texte de chargement avec animation */}
                    <div className="flex items-center space-x-1">
                      <span
                        className={`${fontClass} text-gray-600 font-medium`}
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

                    {/* Icône de localisation animée */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <svg
                          className="w-4 h-4 text-white"
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
                      <div className="absolute inset-0 w-8 h-8 bg-red-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Carte avec transition d'apparition */}
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

              {/* Overlay décoratif avec meilleure lisibilité */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border-2 border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-30"></div>
                  </div>
                  <span
                    className={`${fontClass} text-sm font-bold text-gray-800 drop-shadow-sm`}
                  >
                    Notre localisation
                  </span>
                </div>
              </div>

              {/* Bouton d'agrandissement avec meilleure visibilité */}
              <button
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border-2 border-white/50 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=3.8500,11.5350",
                    "_blank"
                  )
                }
                title="Ouvrir dans Google Maps"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors drop-shadow-sm"
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

              {/* Badge avec adresse - design amélioré */}
              <div className="absolute bottom-4 left-4 right-4 lg:right-auto lg:max-w-[350px]">
                <div className="bg-white/98 backdrop-blur-md rounded-xl p-4 shadow-2xl border-2 border-white/60">
                  <div className="flex items-start space-x-3">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-3 h-3 text-white"
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
                      <div className="absolute inset-0 w-6 h-6 bg-red-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`${fontClass} text-sm font-bold text-gray-900 mb-1 drop-shadow-sm`}
                      >
                        Junctioner Construction Engineering
                      </h4>
                      <p
                        className={`${fontClass} text-sm text-gray-700 font-medium drop-shadow-sm`}
                      >
                        Before Tradex Simbock
                      </p>
                      <p className={`${fontClass} text-xs text-gray-600 mt-1`}>
                        Yaoundé, Cameroun
                      </p>

                      {/* Informations de contact dans la carte */}
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <span
                            className={`${fontClass} text-xs font-semibold text-gray-800`}
                          >
                            (+237) 695 977 562
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-3 h-3 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span
                            className={`${fontClass} text-xs text-gray-700`}
                          >
                            junctionerce@gmail.com
                          </span>
                        </div>
                      </div>
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
