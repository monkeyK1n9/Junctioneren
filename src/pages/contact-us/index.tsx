import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DefaultLayout } from "@/layouts/default.layout";
import cn from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import Form from "@/components/Form";
import { useTranslation } from "next-i18next";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import images from "../../../public/imgs";
import { NextSeo } from "next-seo";

const ContactUS = () => {
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMapLoading, setIsMapLoading] = useState(true);

  const handleMapLoad = () => {
    setTimeout(() => {
      setIsMapLoading(false);
    }, 1500);
  };

  const handleEmailClick = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error(t("contact.form_error"), {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    const subject = encodeURIComponent(
      `Demande de contact de la part de ${name}`
    );
    const body = encodeURIComponent(
      `Nom: ${name}\nTéléphone: ${phone}\nE-mail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:junctionerce@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    toast.success(t("contact.form_success"), {
      position: "top-center",
      autoClose: 5000,
    });
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 500);
  };

  return (
    <DefaultLayout className="overflow-auto">
      <NextSeo
        title={t("contactSeo.title")}
        description={t("contactSeo.description")}
        canonical="https://www.junctioneren.com/contact-us"
        openGraph={{
          url: "https://www.junctioneren.com/contact-us",
          title: "Contact | Junctioner Construction Engineering",
          description:
            "Prenez contact avec nous pour discuter de vos projets de construction et obtenir un accompagnement personnalisé.",
          images: [
            {
              url: "https://www.junctioneren.com/imgs/contact2.webp",
              width: 1200,
              height: 630,
              alt: "Contactez Junctioner Construction Engineering",
              type: "image/webp",
            },
          ],
          siteName: "Junctioner Construction Engineering",
        }}
        twitter={{
          handle: "@junctioner_Eng",
          site: "@junctioner_Eng",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <section className="mt-[120px] md:mt-[140px] lg:mt-[170px] xl:mt-[180px] mx-auto px-4 sm:px-6 lg:px-8 mb-[40px] lg:max-w-[1170px]">
        <div>
          <h1 className="text-4xl font-light text-gray-500 mb-2 lg:mb-1 text-start">
            {t("contact.title01")}
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 lg:px-0 text-start">
            {t("contact.information01")}
          </h1>
        </div>
        {/* Section de images */}
        <div className="flex flex-col gap-6 lg:gap-10 mx-auto my-[20px] lg:my-[40px]">
          <Image
            src={images.Contact2Img}
            alt="picture"
            className="relative object-cover w-full h-auto lg:h-[290px]"
          />
        </div>
        <div>
          <p
            className={`${fontClass} text-[18px] tracking-[0%] font-bold leading-[100%]`}
          >
            {t("contact.int")}
          </p>
          <p
            className={`${fontClass} text-[18px] tracking-[0%] font-light leading-[141%] mt-1`}
          >
            {t("contact.position")}
          </p>
          <div className="flex flex-col md:flex-row lg:max-w-[664px]">
            <div className="mt-[21px] flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
              <button
                className={`w-full sm:w-1/2 lg:w-[314px] py-3 text-primaryTitle rounded-full border border-gray-300 flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors duration-300 ${fontClass} uppercase text-[12px] tracking-[20%] font-normal bg-[#f3f3f3] border-none`}
                onClick={() => window.open("tel:+237695977562", "_self")}
              >
                <Image
                  src={images.CallImg}
                  className="w-[16px] h-[16px]"
                  alt="icon"
                />
                <span className="text-[12px] font-normal leading-[12px] tracking-[20%] text-primaryTitle">
                  {t("contact.call_us")}
                </span>
              </button>
              <button
                className={`w-full sm:w-1/2 lg:w-[314px] py-3 text-primaryTitle rounded-full border border-gray-300 flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors duration-300 ${fontClass} uppercase text-[12px] tracking-[20%] font-normal bg-[#f3f3f3] border-none`}
                onClick={() =>
                  window.open("https://wa.me/+237695977562", "_blank")
                }
              >
                <Image
                  src={images.WhatsImg}
                  className="w-[16px] h-[16px]"
                  alt="icon"
                />
                <span className="text-[12px] font-normal leading-[12px] tracking-[20%] text-primaryTitle">
                  {t("contact.contact")}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-[20px] md:mt-[30px] lg:mt-[40px]">
          {/* Section de gauche: Formulaire */}
          <div className="w-full lg:w-[391px] flex flex-col items-center md:items-start lg:h-[315px]">
            <div className="w-full space-y-4">
              <Form
                text={t("contact.name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form
                text={t("contact.phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Form
                text={t("contact.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form
                textarea
                text={t("contact.msg")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          {/* Section de droite: Carte (iframe) */}
          <div className="w-full lg:w-[765px] relative h-[400px] lg:h-[340px] rounded-lg overflow-hidden lg:pt-4">
            {isMapLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
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
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-2 sm:p-3 shadow-xl border-2 border-white/50 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=3.8500,11.5350",
                  "_blank"
                )
              }
              title="Ouvrir dans Google Maps"
            ></button>
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
                      className={`${fontClass} text-[12px] tracking-[20%] leading-[12px] font-normal text-gray-900 drop-shadow-sm`}
                    >
                      {t("contact.int")}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-[40px] lg:max-w-[1170px]">
        <button
          onClick={handleEmailClick}
          className="w-full lg:w-[280px] py-4 text-white rounded-[18.7px] bg-indigo-900 hover:bg-indigo-800 transition-colors duration-300 uppercase"
        >
          <span className="text-[12px] font-normal leading-[12px] tracking-[20%] text-white">
            {t("contact.send_message")}
          </span>
        </button>
        <div className="mt-[10px] sm:mt-[20px] lg:mt-[40px]">
          <h4 className="text-3xl lg:text-[44.88px] font-bold text-[#333333] mb-8 lg:px-0 text-start">
            {t("contact.even")}
          </h4>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative overflow-hidden">
                <Image
                  src={images.C1}
                  alt="image"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="relative overflow-hidden">
                <Image
                  src={images.C4}
                  alt="image"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="relative overflow-hidden">
                <Image
                  src={images.C3}
                  alt="image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* second */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                <Image
                  src={images.C5}
                  alt="image"
                  className="w-full h-auto col-span-2"
                />
                <Image
                  src={images.C2}
                  alt="image"
                  className="w-full h-auto col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[40px] sm:mb-[80px] lg:mb-[150px] ] bg-red-500 container "></div>
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
