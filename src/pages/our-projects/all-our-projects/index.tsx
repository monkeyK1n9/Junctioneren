import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DefaultLayout } from "@/layouts/default.layout";
import { fontClassRoboto } from "@/pages/who-we-are";
import Image from "next/image";
import images from "../../../../public/imgs";
import Link from "next/link";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

type ProjectProps = {
  picture: any;
  title: string;
  link: string;
  content?: string;
};

const projectGrid01: ProjectProps[] = [
  {
    picture: images.Others1,
    title: "Société New Food Agro Industry (sNFAI)",
    link: "/our-projects/cite-universitaire-mfou",
    content:
      "Pour le compte de la Société New Food Agro Industry (sNFAI), nous assurons le management et le suivi du projet de construction d'une industrie agro-alimentaire dans la localité de Missole 1 à Dibamba. Ce projet a débuté sur une superficie de 3 hectares et s'est étendu pour couvrir 10 hectares.",
  },
  {
    picture: images.PUnMf,
    title: "Cité universitaire a Mfou",
    link: "/our-projects/cite-universitaire-mfou",
    content:
      "Construction d'une cité universitaire dans la Commune de Mfou , 21 chambres (7 chambres par niveau) avec Toilettes plus espace cuisine",
  },
  {
    picture: images.PuEy,
    title: "Cité universitaire a Eyang",
    link: "/our-projects/cite-universitaire-eyang",
    content:
      "Construction d'une cité universitaire dans la Commune d'Eyang prêt de l'université Catholique Saint Jean. Spécificité: 21 chambres (7 chambres par niveau avec Toilettes, espace cuisine), Boutiques au RDC",
  },
  {
    picture: images.PuEy,
    title: "Cité universitaire a Eyang",
    link: "/our-projects/cite-universitaire-eyang",
    content:
      "Construction d'une cité universitaire dans la Commune d'Eyang prêt de l'université Catholique Saint Jean. Spécificité: 21 chambres (7 chambres par niveau avec Toilettes, espace cuisine), Boutiques au RDC",
  },
  {
    picture: images.PUnMf,
    title: "Cité universitaire a Mfou",
    link: "/our-projects/cite-universitaire-mfou",
    content:
      "Construction d'une cité universitaire dans la Commune de Mfou , 21 chambres (7 chambres par niveau) avec Toilettes plus espace cuisine",
  },
  {
    picture: images.Others1,
    title: "Société New Food Agro Industry (sNFAI)",
    link: "/our-projects/cite-universitaire-mfou",
    content:
      "Pour le compte de la Société New Food Agro Industry (sNFAI), nous assurons le management et le suivi du projet de construction d'une industrie agro-alimentaire dans la localité de Missole 1 à Dibamba. Ce projet a débuté sur une superficie de 3 hectares et s'est étendu pour couvrir 10 hectares.",
  },
];

const CardItem = ({
  content,
  path,
  picture,
  title,
}: {
  picture: string;
  title: string;
  content: string;
  path: string;
}) => {
  return (
    <div className="gap-[16px] lg:gap-[24px] flex flex-col lg:flex-row items-start bg-[#FBFBFB] rounded-lg lg:shadow-sm overflow-hidden h-full">
      {/* Image Section */}
      <div className="w-full lg:w-[50%] h-[200px] sm:h-[300px] lg:h-[435px]">
        <Image
          src={picture}
          alt="picture"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="text-left p-[16px] sm:p-[20px] lg:p-[30px] flex flex-col justify-between lg:w-[50%] lg:h-[435px]">
        <div>
          <h5
            className={`text-[#BDBDBD] font-[300] text-[20px] sm:text-[28px] lg:text-[36px] leading-[120%] tracking-[0%] ${fontClassRoboto}`}
          >
            {title}
          </h5>
          <p
            className={`text-gray-500 pt-[10px] lg:pt-[16px] font-[400] text-[12px] sm:text-[14px] lg:text-[16px] tracking-[0%] leading-[25px] ${fontClassRoboto}`}
          >
            {content}
          </p>
        </div>
        <div>
          <Link
            href={path}
            className={`flex items-center mt-[5px] ${fontClassRoboto} font-[400] text-[10px] lg:text-[12px] leading-[12px] tracking-[20%] uppercase text-[#333333] bg-white w-[222px] h-[40px] sm:h-[55px] lg:h-[71px] justify-center transition-transform duration-300 hover:scale-110`}
          >
            View More
            <FaLongArrowAltRight className="pl-[4px] lg:pl-[6px]" size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ITEMS_PER_PAGE = 3;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(projectGrid01.length / ITEMS_PER_PAGE);

  // Get the items for the current page
  const currentItems = projectGrid01.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <DefaultLayout>
      <Header />
      <main className="mt-[20px] sm:mt-[60px] lg:mt-[80px]">
        <section className="py-[15px] lg:py-[30px] lg:max-w-[62%] lg:mx-auto px-2 lg:px-0">
          <h5
            className={`${fontClassRoboto} text-[#BDBDBD] font-[300] text-[40px] sm:text-[50px] lg:text-[64px] leading-[64px] tracking-[0%]`}
          >
            Our
            <br />
            <span className="font-[700] text-[#DF4D1B]">Projects</span>
          </h5>
        </section>
        <section className="my-[20px] lg:my-[60px]">
          <div className="container mx-auto">
            <div className="lg:max-w-[1000px] mx-auto flex flex-col space-y-[30px] lg:space-y-[60px]">
              {currentItems.map((item, index) => (
                <CardItem
                  key={index}
                  content={String(item.content)}
                  path={item.link}
                  picture={item.picture}
                  title={item.title}
                />
              ))}
              {/* Pagination Controls */}
              <div className="flex justify-center lg:justify-start mt-[30px] space-x-4">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg flex items-center justify-center ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#DF4D1B] text-white hover:bg-[#c43f18] transition-colors duration-300"
                  }`}
                >
                  <FaLongArrowAltLeft className="mr-2" />
                </button>
                {/* Page Numbers */}
                {/* {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-[#DF4D1B] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition-colors duration-300`}
                >
                  {index + 1}
                </button>
              ))} */}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg flex items-center justify-center ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#DF4D1B] text-white hover:bg-[#c43f18] transition-colors duration-300"
                  }`}
                >
                  <FaLongArrowAltRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </DefaultLayout>
  );
};

export default Index;
