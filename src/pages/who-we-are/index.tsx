import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { DefaultLayout } from "@/layouts/default.layout";
import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import images from "../../../public/imgs";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaArrowRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhoWeAre from "@/components/WhoWeAre";
import Breadcrumb from "@/components/Breadcrumb";
import { cleanText } from "@/utils/text";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";

export const fontClassRoboto = cn(
  RobotoUiDisplay.className,
  RobotoUiDisplay.variable
);
export const fontClassInter = cn(
  InterUiDisplay.className,
  InterUiDisplay.variable
);
type CardType = {
  name: string;
  occupation: string;
  content: string;
  pic: any;
  linkedin?: string;
};

const WhoWeArePage = () => {
  const { t } = useTranslation("common");
  const datas: CardType[] = [
    {
      name: t("weArePage.b1"),
      content: t("weArePage.d1"),
      occupation: t("weArePage.p1"),
      pic: images.Prof4,
      linkedin: "linkedin.com/in/kacdeu-baudoin-426506a8",
    },
    {
      name: t("weArePage.b2"),
      content: t("weArePage.d2"),
      occupation: t("weArePage.p2"),
      pic: images.Prof5,
      linkedin: "https://www.linkedin.com/in/lionel-kameni-75b79b1b2/",
    },
    {
      name: t("weArePage.b3"),
      content: t("weArePage.d3"),
      occupation: t("weArePage.p3"),
      pic: images.Prof3,
      linkedin: "https://www.linkedin.com/in/ngalandeu-kwemo-adrien-6b0a31165/",
    },
    {
      name: t("weArePage.b4"),
      content: t("weArePage.d4"),
      occupation: t("weArePage.p4"),
      pic: images.Prof6,
      linkedin: "https://www.linkedin.com/in/sandra-alida-1b29a21bb/ ",
    },
    {
      name: t("weArePage.b5"),
      content: t("weArePage.d5"),
      occupation: t("weArePage.p5"),
      pic: images.Prof7,
      linkedin:
        "https://www.linkedin.com/in/mo%C3%AFse-christopher-onana-andele-461680165",
    },
    {
      name: t("weArePage.b6"),
      content: t("weArePage.d6"),
      occupation: t("weArePage.p6"),
      pic: images.Prof8,
      linkedin: "https://www.linkedin.com/in/clemence-ambama-50a9541b3/",
    },
    {
      name: t("weArePage.b7"),
      content: t("weArePage.d7"),
      occupation: t("weArePage.p7"),
      pic: images.Prof9,
      linkedin:
        "https://www.linkedin.com/in/idene-sinclaire-tedongmo-tchinda-4ba2061b3/",
    },
    {
      name: t("weArePage.b8"),
      content: t("weArePage.d8"),
      occupation: t("weArePage.p8"),
      pic: images.Prof10,
      linkedin:
        "https://www.linkedin.com/in/joyce-langevins-nganguem-01586a34a/",
    },
    // {
    //   name: t("weArePage.b9"),
    //   content: t("weArePage.d9"),
    //   occupation: t("weArePage.p9"),
    //   pic: images.Prof11,
    //   linkedin: "#",
    // },
  ];
  const CardItem = ({ content, name, occupation, pic, linkedin }: CardType) => {
    return (
      <div className="w-full flex flex-col sm:flex-row items-start gap-[16px] sm:gap-[20px] lg:gap-[20px] bg-white rounded-[14px] p-4 sm:p-6 lg:max-h-[460px]">
        <Image
          src={pic}
          alt="picture"
          className="w-full sm:w-[160px] sm:h-[180px] lg:w-[180px] lg:h-[222px] h-[250px] rounded-[10px] object-cover"
        />
        <div className="text-left flex-1 flex flex-col justify-between">
          <h4 className="text-[#2A2A2A] font-[300] text-[16px] sm:text-[18px] md:text-[20px] leading-tight tracking-[0%]">
            {name}
          </h4>
          <h5 className="pt-[6px] text-[#DF4D1B] font-[700] text-[13px] sm:text-[14px] md:text-[15px] leading-tight tracking-[0%]">
            {occupation}
          </h5>
          <p
            className={`text-gray-500 pt-[8px] font-[400] text-[12px] sm:text-[13px] tracking-[0%] leading-[18px] ${fontClassInter}`}
          >
            {content}
          </p>
          <Link href={String(linkedin)} aria-label="link">
            <button
              className={`mt-[10px] px-[10px] sm:px-[12px] py-[7px] sm:py-[8px] bg-[#EBEBEB] rounded-[8px] flex justify-center items-center gap-[8px] ${fontClassInter} text-[#0A66C2] font-[500] text-[11px] sm:text-[12px] md:text-[13px] leading-tight tracking-[0%] transition-transform duration-300 hover:scale-105 hover:bg-[#D6D6D6]`}
            >
              <span className="transition-transform duration-300 group-hover:rotate-45">
                <FaLinkedin size={16} />
              </span>
              Visit Linkedin Profile
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <DefaultLayout>
      <NextSeo
        title={t("whoWeAreSeo.title")}
        description={t("whoWeAreSeo.description")}
        canonical="https://www.junctioneren.com/who-we-are"
        openGraph={{
          url: "https://www.junctioneren.com/who-we-are",
          title: "Qui nous sommes | Junctioner Construction Engineering",
          description:
            "Découvrez nos valeurs, notre vision et notre équipe dédiée à l'excellence dans le secteur de la construction.",
          images: [
            {
              url: "https://www.junctioneren.com/imgs/contact2.webp",
              width: 1200,
              height: 630,
              alt: "À propos de Junctioner Construction Engineering",
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
      <main className="lg:max-w-[80%] lg:mx-auto pt-[30px] lg:pt-[40px] px-4 lg:px-0">
        <section>
          <Breadcrumb />
          <h5
            className={`${fontClassRoboto} text-[#333333] font-[700] text-[36px] sm:text-[50px] lg:text-[64px] leading-[40px] sm:leading-[50px] xl:leading-[75px] tracking-[0%] lg:max-w-[986px] lg:mt-[25px] px-2 text-center lg:text-start pt-4 lg:pt-0`}
          >
            {t("weArePage.title")}
          </h5>
          <div className="pt-[16px] lg:pt-[32px]">
            <WhoWeAre />
          </div>
        </section>
        <section className="pt-[14px] lg:pt-[72px]">
          <div className="container mx-auto">
            <div className="bg-[#F4F4F4] lg:h-[161px] rounded-[20px] lg:max-w-[90%] mx-auto flex flex-col justify-center items-center p-6 lg:p-0">
              <p
                className={`${fontClassInter} text-[16px] lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#282828] text-center`}
              >
                {t("servicePage.contactTitle")}
              </p>
              <div className="lg:w-[605px] flex flex-col lg:flex-row justify-center items-center mt-[12px] lg:mt-[29px]">
                <button
                  className={`${fontClassRoboto} flex justify-center items-center text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105 hover:text-[#4a3b9d]`}
                >
                  {t("servicePage.email")}
                  <span className="pl-[4px]">
                    <FaArrowRight />
                  </span>
                </button>
                <span
                  className={`mx-[52px] ${fontClassRoboto} flex justify-center items-center text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105 hover:text-[#4a3b9d] my-2 lg:my-0`}
                >
                  {t("servicePage.or")}
                </span>
                <div
                  className="rounded-full bg-[#DADADA] px-[25px] py-[6px] text-center flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-[#e0e0e0]"
                  onClick={() =>
                    window.open(
                      "https://wa.me/message/YEZBH4GZF6YYP1",
                      "_blank"
                    )
                  }
                >
                  <FaWhatsapp
                    color="green"
                    size={27}
                    className="mr-[14px] text-white"
                  />
                  <p className="text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium">
                    {t("servicePage.wsp")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="teams"
          className="pt-[16px] lg:pt-[62px] lg:mx-auto px-2 lg:px-0 pb-[100px] sm:pb-[200px] lg:pb-[300px]"
        >
          <div className="mt-[20px] sm:mt-[40px] lg:mt-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-[20px] lg:gap-y-0 lg:gap-x-[76px]">
              {datas.map((item, index) => (
                <CardItem
                  key={index}
                  content={item.content}
                  name={item.name}
                  linkedin={item.linkedin}
                  occupation={item.occupation}
                  pic={item.pic}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
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

export default WhoWeArePage;
