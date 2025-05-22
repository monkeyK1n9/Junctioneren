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
const datas: CardType[] = [
  {
    name: "Kacdeu Baudoin",
    content:
      "Visionnaire au sens de l'humanité, Kacdeu Baudoin incarne les valeurs de Junctioner Construction Engineering. Avec une forte volonté de faire grandir l'équipe, il se soucie du bien-être de chacun, créant un environnement propice à l'épanouissement professionnel",
    occupation: "CEO Founder",
    pic: images.Prof4,
    linkedin: "#kacdeu",
  },
  {
    name: "Eng. Kameni Lionel",
    content:
      "Ingénieur de conception talentueux, Eng. Kameni Lionel est reconnu pour son intelligence et son sens du leadership. Précis et optimisateur, il vise l’excellence dans tous ses projets, démontrant des compétences managériales et de coordination remarquables",
    occupation:
      "Ingénieur de Conception en Génie Civil, Chef des Infrastructures",
    pic: images.Prof5,
    linkedin: "#kameni",
  },
  {
    name: "Arch. NGALANDEU KWEMO Adrien",
    content:
      "Dynamique et dévoué à la cause collective, Ngalandeu Kwemo Adrien veille au bon fonctionnement de chaque élément au sein de ses projets. Sa capacité à gérer des équipes avec efficacité fait de lui un atout essentiel pour Junctioner Construction Engineering",
    occupation:
      "Chef de Projet, Architecte, Responsable du Département d'Architecture",
    pic: images.Prof3,
    linkedin: "#",
  },
  {
    name: "Arch. DZOUDJA NANA Alida Sandra",
    content:
      "DZOUDJA Nana Sandra incarne l'excellence avec un souci du détail et une passion pour l'architecture d'intérieur. Dynamique et proactive, elle a toujours une vue à 360 degrés sur ses projets. Professionnelle et disciplinée, ses atouts incluent un bon sens pratique, ainsi qu'un talent et une créativité remarquables.",
    occupation:
      "Chef de Projet, Architecte de conception, Responsable Département Qualité et Finition",
    pic: images.Prof6,
    linkedin: "#",
  },
  {
    name: "Eng. ANDELE ONANA Christophe",
    content:
      "Eng. Andele Onana Christopher est un leader rigoureux et sérieux, toujours en quête de qualité. Pour lui, le management est un mode de vie, et il s'efforce d'inspirer son équipe à atteindre des résultats exceptionnels.",
    occupation:
      "Ingénieur de Conception en Génie Civil, Chef de Projet, Responsable des Ouvrages Spéciaux",
    pic: images.Prof7,
    linkedin: "#",
  },
  {
    name: "AMBAMA Clémence",
    content:
      "Dynamique et proactive, Ambama Clémence veille à ce que tous les éléments soient réunis pour atteindre les objectifs de l'entreprise. Elle est toujours prête à soutenir son directeur et à contribuer au succès de l'équipe.",
    occupation: "Assistante de Direction, Responsable communication",
    pic: images.Prof8,
    linkedin: "#",
  },
  {
    name: "Arch. TEDONGMO IDENE Sinclaire",
    content:
      "Humble et exigeante, Idene Sinclair est toujours prête à apprendre et à obtenir des résultats concrets. Sa détermination et son sens de l'excellence font d'elle une architecte de choix au sein de Junctioner Construction Engineering.",
    occupation: "Architecte, Chef de Projet",
    pic: images.Prof9,
    linkedin: "#",
  },
  {
    name: "Eng. NGANGUEM Joyce",
    content:
      "Assidu et créatif, Eng. Nganguem Joyce se distingue par sa rigueur et sa capacité à gérer des situations complexes. Toujours respectueux et prêt à apprendre, il est un pilier de l'équipe, apportant des solutions innovantes à chaque projet.",
    occupation: "Ingénieur de Conception en Génie Civil, Ingénieur de Projet",
    pic: images.Prof10,
    linkedin: "#",
  },
  {
    name: "Eng. DJOUMBI NGANKAM Jeffry",
    content:
      "Polyvalent et dynamique, Jeffry DJOUMBI NGANKAM est assidu à sa tâche et dévoué à son travail. Sa créativité et son engagement font de lui un membre précieux de l'équipe de Junctioner Construction Engineering.",
    occupation: "Ingénieur des Travaux",
    pic: images.Prof11,
    linkedin: "#",
  },
];

const WhoWeArePage = () => {
  const CardItem = ({ content, name, occupation, pic, linkedin }: CardType) => {
    return (
      <div className="w-full lg:w-[468px] h-auto lg:h-[222px] gap-[16px] lg:gap-[24px] flex flex-col lg:flex-row items-start">
        <Image
          src={pic}
          alt="picture"
          className="w-[250px] h-[200px] lg:w-[180px] lg:h-[222px] rounded-[10px] object-cover"
        />
        <div className="text-left">
          <h4 className="text-[#2A2A2A] font-[300] text-[14px] sm:text-[16px] leading-[100%] tracking-[0%]">
            {name}
          </h4>
          <h5 className="pt-[6px] text-[#DF4D1B] font-[700] text-[12px] sm:text-[14px] leading-[100%] tracking-[0%]">
            {occupation}
          </h5>
          <p
            className={`text-gray-500 pt-[8px] font-[400] text-[10px] sm:text-[11px] tracking-[0%] leading-[16px] ${fontClassInter}`}
          >
            {content}
          </p>
          <Link href={String(linkedin)} aria-label="link">
            <button
              className={`mt-[8px] px-[8px] sm:px-[10.5px] py-[6px] sm:py-[7px] bg-[#EBEBEB] rounded-[8px] flex justify-center items-center gap-[8px] ${fontClassInter} text-[#0A66C2] font-[500] text-[10px] sm:text-[12px] leading-[100%] tracking-[0%] transition-transform duration-300 hover:scale-105 hover:bg-[#D6D6D6]`}
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
      <Header />
      <main className="mt-[40px] sm:mt-[60px] lg:mt-[84px]">
        <section className="py-[20px] lg:py-[46px] lg:max-w-[62%] lg:mx-auto px-2 lg:px-0">
          <h5
            className={`${fontClassRoboto} text-[#BDBDBD] font-[300] text-[40px] sm:text-[50px] lg:text-[64px] leading-[64px] tracking-[0%]`}
          >
            Meet our team
          </h5>
          <h5
            className={`${fontClassRoboto} text-[#333333] font-[700] text-[40px] sm:text-[50px] lg:text-[64px] leading-[50px] sm:leading-[50px] lg:leading-[75px] tracking-[0%] lg:max-w-[986px] mt-[25px]`}
          >
            Meet the junctioners that makes everything possible
          </h5>
          <div className="mt-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-[20px] lg:gap-x-[76px] lg:gap-y-[50px]">
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
        <section className="my-[14px] lg:my-[54px]">
          <div className="container mx-auto">
            <div className="bg-[#F4F4F4] lg:h-[161px] rounded-[20px] lg:max-w-[90%] mx-auto flex flex-col justify-center items-center p-6 lg:p-0">
              <p
                className={`${fontClassInter} text-[16px] lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#282828] text-center`}
              >
                What can we do for you
              </p>
              <div className="lg:w-[605px] flex flex-col lg:flex-row justify-center items-center mt-[12px] lg:mt-[29px]">
                <button
                  className={`${fontClassRoboto} flex justify-center items-center text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105 hover:text-[#4a3b9d]`}
                >
                  Send email
                  <span className="pl-[4px]">
                    <FaArrowRight />
                  </span>
                </button>
                <span
                  className={`mx-[52px] ${fontClassRoboto} flex justify-center items-center text-[12px] uppercase text-[#312783] leading-[12px] tracking-[20%] font-medium transition-transform duration-300 hover:scale-105 hover:text-[#4a3b9d] my-2 lg:my-0`}
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
          </div>
        </section>
      </main>
      <Footer />
    </DefaultLayout>
  );
};

export default WhoWeArePage;
