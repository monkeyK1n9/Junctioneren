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

export const fontClassRoboto = cn(
  RobotoUiDisplay.className,
  RobotoUiDisplay.variable
);
export const fontClassInter = cn(
  InterUiDisplay.className,
  InterUiDisplay.variable
);

type CardType = {
  title: string;
  content: string;
  pic: any;
};
const datasOne: CardType[] = [
  {
    title: "Management de la construction",
    content:
      "Nous offrons une gestion complète des projets, incluant la planification, l'organisation et le contrôle de toutes les phases de construction. Notre équipe veille à respecter les délais, le budget et la qualité, tout en coordonnant les différents intervenants.",
    pic: images.Management,
  },
  {
    title: "Conception architecturale et réalisation d'infrastructures",
    content:
      "Nous offrons une gestion complète des projets, incluant la planification, l'organisation et le contrôle de toutes les phases de construction. Notre équipe veille à respecter les délais, le budget et la qualité, tout en coordonnant les différents intervenants.",
    pic: images.Conception,
  },
  {
    title: "Design d'intérieur et Extérieur",
    content:
      "Nous intégrons des technologies domotiques dans nos projets, permettant un contrôle intelligent des systèmes de sécurité, d'éclairage, de chauffage et d'autres fonctionnalités. Cela améliore le confort et l'efficacité énergétique des maisons.",
    pic: images.Design,
  },
  {
    title: "Maisons intelligentes",
    content:
      "Nous offrons une gestion complète des projets, incluant la planification, l'organisation et le contrôle de toutes les phases de construction. Notre équipe veille à respecter les délais, le budget et la qualité, tout en coordonnant les différents intervenants.",
    pic: images.Maison,
  },
];
const datasTwo: CardType[] = [
  {
    title: "Terrassement",
    content:
      "Nos services de terrassement incluent le nivellement et la préparation du terrain pour la construction. Nous utilisons des équipements modernes pour garantir une base solide pour tous les types de structures.",
    pic: images.Terrassement,
  },
  {
    title: "Management de la construction",
    content:
      "Nous offrons une gestion complète des projets, incluant la planification, l'organisation et le contrôle de toutes les phases de construction. Notre équipe veille à respecter les délais, le budget et la qualité, tout en coordonnant les différents intervenants.",
    pic: images.Others,
  },
  {
    title: "Management de la construction",
    content:
      "Nous offrons une gestion complète des projets, incluant la planification, l'organisation et le contrôle de toutes les phases de construction. Notre équipe veille à respecter les délais, le budget et la qualité, tout en coordonnant les différents intervenants.",
    pic: images.Others,
  },
  {
    title: "Management de la construction",
    content:
      "Nous offrons une gestion complète des projets, incluant la planification, l'organisation et le contrôle de toutes les phases de construction. Notre équipe veille à respecter les délais, le budget et la qualité, tout en coordonnant les différents intervenants.",
    pic: images.Others,
  },
];

const OurServices = () => {
  const CardItem = ({ content, title, pic }: CardType) => {
    return (
      <div className="w-full lg:w-[474px] h-auto lg:h-[222px] gap-[16px] lg:gap-[24px] flex flex-col lg:flex-row items-start">
        <Image
          src={pic}
          alt="picture"
          className="w-[250px] h-[200px] lg:w-[193.33px] lg:h-[212px] rounded-[10px] object-cover"
        />
        <div className="text-left">
          <h5 className="pt-[6px] text-[#DF4D1B] font-[700] text-[12px] sm:text-[14px] lg:text-[20px] leading-[100%] tracking-[0%]">
            {title}
          </h5>
          <p
            className={`text-gray-500 pt-[8px] lg:pt-[10px] font-[400] text-[10px] sm:text-[11px] lg:text-[14px] tracking-[0%] leading-[18px] ${fontClassInter}`}
          >
            {content}
          </p>
        </div>
      </div>
    );
  };

  return (
    <DefaultLayout>
      <Header />
      <main className="mt-[100px]">
        <section className="py-[15px] lg:py-[30px] lg:max-w-[62%] lg:mx-auto px-2 lg:px-0">
          <h5
            className={`${fontClassRoboto} text-[#BDBDBD] font-[300] text-[40px] sm:text-[50px] lg:text-[64px] leading-[64px] tracking-[0%]`}
          >
            Our Services
          </h5>
        </section>
        <section className="my-[14px] lg:my-[48px]">
          <div className="container mx-auto">
            <div className="mt-[20px] sm:mt-[40px] lg:mt-[100px] lg:max-w-[986px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-[20px] lg:gap-x-[76px] lg:gap-y-[50px]">
                {datasOne.map((item, index) => (
                  <CardItem
                    key={index}
                    content={item.content}
                    title={item.title}
                    pic={item.pic}
                  />
                ))}
              </div>
            </div>
            <div className="bg-[#312783] lg:h-[161px] rounded-[20px] lg:max-w-[90%] mx-auto flex flex-col justify-center items-center p-6 lg:p-0 text-white my-[10px] lg:my-[34px]">
              <p
                className={`${fontClassInter} text-[16px] lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-center`}
              >
                What can we do for you
              </p>
              <div className="lg:w-[605px] flex flex-col lg:flex-row justify-center items-center mt-[12px] lg:mt-[29px]">
                <button
                  className={`${fontClassRoboto} flex justify-center items-center text-[12px] uppercase leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105`}
                >
                  Send email
                  <span className="pl-[4px]">
                    <FaArrowRight />
                  </span>
                </button>
                <span
                  className={`mx-[52px] ${fontClassRoboto} flex justify-center items-center text-[12px] uppercase leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105 my-2 lg:my-0`}
                >
                  OR
                </span>
                <div
                  className="rounded-full bg-[#DADADA] px-[25px] py-[6px] text-center flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-[#e0e0e0]"
                  onClick={() => window.open("https://wa.me/+23769", "_blank")}
                >
                  <FaWhatsapp
                    color="green"
                    size={27}
                    className="mr-[14px] text-white"
                  />
                  <p className="text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium">
                    Contact us on whatsapp
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[986px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-[20px] lg:gap-x-[76px] lg:gap-y-[50px]">
                {datasTwo.map((item, index) => (
                  <CardItem
                    key={index}
                    content={item.content}
                    title={item.title}
                    pic={item.pic}
                  />
                ))}
              </div>
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

export default OurServices;
