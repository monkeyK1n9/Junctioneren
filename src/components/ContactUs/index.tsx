import Image from "next/image";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "next-i18next";
import cn from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";
import Form from "../Form";
import images from "../../../public/imgs";

const ContactUs = () => {
  const { t } = useTranslation("common");
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailClick = () => {
    if (!phone.trim() || !message.trim()) {
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
    <section className="py-10 px-4 md:py-20 max-w-[900px] mx-auto">
      <h1 className="text-3xl font-light text-gray-700 mb-8">
        {t("contact.title")}
      </h1>
      <div className="flex flex-col md:flex-row w-full lg:space-x-[20px]">
        {/* Section de gauche: Formulaire */}
        <div className="w-full md:w-1/2">
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
            <button
              onClick={handleEmailClick}
              className="w-full lg:w-[324px] py-4 text-white rounded-[18.7px] bg-indigo-900 hover:bg-indigo-800 transition-colors duration-300 uppercase"
            >
              <span className="text-[12px] font-normal leading-[12px] tracking-[20%] text-white">
                {t("contact.send_message")}
              </span>
            </button>
          </div>
        </div>

        {/* Section de droite: image */}
        <div className="hidden md:flex w-1/2 items-center justify-center relative">
          <Image
            src={images.ContactImg}
            alt="picture"
            className="object-cover w-full h-full rounded-lg"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:max-w-[664px]">
        <div className="mt-[21px] lg:mt-[37px] flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
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
            onClick={() => window.open("https://wa.me/+23769", "_blank")}
          >
            <Image
              src={images.WhatsImg}
              className="w-[16px] h-[16px]"
              alt="icon"
            />
            <span className="text-[12px] font-normal leading-[12px] tracking-[20%] text-primaryTitle">
              {t("contact.contact_whatsapp")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
