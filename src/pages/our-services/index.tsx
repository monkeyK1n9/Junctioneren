import Header from "@/components/Header";
import { DefaultLayout } from "@/layouts/default.layout";
import { InterUiDisplay, RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Footer from "@/components/Footer";
import { FaArrowRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import images from "../../../public/imgs";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "@/components/Breadcrumb";
import Menu from "@/components/ui/Menu";
import { useTranslation } from "react-i18next";
import SlideUp from "@/components/Animation/SlideUp";
import { NextSeo } from "next-seo";

export const fontClassRoboto = cn(
  RobotoUiDisplay.className,
  RobotoUiDisplay.variable
);
export const fontClassInter = cn(
  InterUiDisplay.className,
  InterUiDisplay.variable
);

interface LogisticCardProps {
  bigImage: string;
  smallImage: string;
}

const LogisticCard: React.FC<LogisticCardProps> = ({
  bigImage,
  smallImage,
}) => {
  return (
    <div className="relative overflow-hidden w-full aspect-square rounded-[10px] group lg:w-[194px] lg:h-[212px]">
      <Image
        src={bigImage}
        alt="Main Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-3 left-3 w-[100px] lg:w-[80px] h-[100px] lg:h-[80px] rounded-[10px] overflow-hidden border-2 border-white/50 shadow-lg">
        <Image
          src={smallImage}
          alt="Small Overlay"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

type CardType = {
  title: any;
  content: string;
  pic: any;
  small: any;
};
const OurServices = () => {
  const CardItem = ({ content, title, pic, small }: CardType) => {
    return (
      <div className="w-full lg:w-[543px] h-auto lg:h-[212px] gap-[16px] lg:gap-[24px] flex flex-col lg:flex-row items-start">
        <LogisticCard bigImage={pic} smallImage={small} />
        <div className="text-left flex-grow lg:w-[342px]">
          <h5 className="pt-[6px] text-[#DF4D1B] font-[700] text-[12px] sm:text-[14px] lg:text-[20px] leading-[100%] tracking-[0%]">
            {title}
          </h5>
          <p
            className={`text-gray-500 pt-[8px] lg:pt-[10px] font-[400] text-[13px] sm:text-[11px] lg:text-[14px] tracking-[0%] leading-[18px] ${fontClassInter}`}
          >
            {content}
          </p>
        </div>
      </div>
    );
  };

  const { t } = useTranslation("common");

  const datasOne: CardType[] = [
    {
      title: t("servicePage.s1"),
      content: t("servicePage.d1"),
      pic: images.Management,
      small: images.Management1,
    },
    {
      title: t("servicePage.s2"),
      content: t("servicePage.d2"),
      pic: images.Conception,
      small: images.Conception1,
    },
    {
      title: t("servicePage.s3"),
      content: t("servicePage.d3"),
      pic: images.Design,
      small: images.Design1,
    },
    {
      title: t("servicePage.s4"),
      content: t("servicePage.d4"),
      pic: images.Maison,
      small: images.Maison1,
    },
  ];
  const datasTwo: CardType[] = [
    {
      title: t("servicePage.s5"),
      content: t("servicePage.d5"),
      pic: images.Terrassement,
      small: images.Terrassement1,
    },
    {
      title: t("servicePage.s6"),
      content: t("servicePage.d6"),
      pic: images.Ser1,
      small: images.Ser11,
    },
    {
      title: t("servicePage.s7"),
      content: t("servicePage.d7"),
      pic: images.Ser2,
      small: images.Ser22,
    },
    {
      title: t("servicePage.s8"),
      content: t("servicePage.d8"),
      pic: images.Ser3,
      small: images.Ser33,
    },
    {
      title: t("servicePage.s9"),
      content: t("servicePage.d9"),
      pic: images.Ser4,
      small: images.Ser44,
    },
    {
      title: t("servicePage.s10"),
      content: t("servicePage.d10"),
      pic: images.Ser5,
      small: images.Ser55,
    },
  ];

  return (
    <DefaultLayout>
      <NextSeo
        title={t("whatWeDoSeo.title")}
        description={t("whatWeDoSeo.description")}
        canonical="https://www.junctioneren.com/our-services"
        openGraph={{
          url: "https://www.junctioneren.com/our-services",
          title: "Nos Projets | Junctioner Construction Engineering",
          description:
            "Un aperçu de nos réalisations dans le secteur de la construction et de l'ingénierie.",
          images: [
            {
              url: "https://www.junctioneren.com/imgs/contact2.webp",
              width: 1200,
              height: 630,
              alt: "Services de Junctioner Construction Engineering",
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
      <SlideUp delay={0.5}>
        <main className="lg:max-w-[1342px] lg:mx-auto py-[30px] lg:py-[40px] px-4 lg:px-0">
          {/* <Breadcrumb /> */}
          <div className="pt-[32px] sm:pt-[50px] lg:pt-[80px] xl:pt-[103px]" />
          <Menu title={t("servicePage.title")} titleLink={""} path="" />
          <section className="my-[14px] lg:my-[48px]">
            <div className="mx-auto">
              <div className="mt-[20px] sm:mt-[40px] lg:mt-[100px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-[20px] lg:gap-x-[76px] lg:gap-y-[50px]">
                  {datasOne.map((item, index) => (
                    <CardItem
                      key={index}
                      content={item.content}
                      title={item.title}
                      small={item.small}
                      pic={item.pic}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-[#312783] lg:h-[161px] rounded-[20px] mx-auto flex flex-col justify-center items-center p-6 lg:p-0 text-white my-[10px] lg:my-[34px]">
                <p
                  className={`${fontClassInter} text-[16px] lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-center`}
                >
                  {t("servicePage.contactTitle")}
                </p>
                <div className="lg:w-[605px] flex flex-col lg:flex-row justify-center items-center mt-[12px] lg:mt-[29px]">
                  <a
                    href={`mailto:junctionerce@gmail.com`}
                    className={`${fontClassRoboto} flex justify-center items-center text-[12px] uppercase leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105`}
                  >
                    {t("servicePage.email")}
                    <span className="pl-[4px]">
                      <FaArrowRight />
                    </span>
                  </a>
                  <span
                    className={`mx-[52px] ${fontClassRoboto} flex justify-center items-center text-[12px] uppercase leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105 my-2 lg:my-0`}
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
              <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-[20px] lg:gap-x-[76px] lg:gap-y-[50px]">
                  {datasTwo.map((item, index) => (
                    <CardItem
                      key={index}
                      content={item.content}
                      title={item.title}
                      small={item.small}
                      pic={item.pic}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </SlideUp>
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

export default OurServices;
