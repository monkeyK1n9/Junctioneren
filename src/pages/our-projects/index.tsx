import { DefaultLayout } from "@/layouts/default.layout";
import OurProjects from "@/components/OurProject";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";
import OthersProjects from "@/components/OthersProjects";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Breadcrumb from "@/components/Breadcrumb";

const OurProjectsPage = () => {
  return (
    <DefaultLayout className="overflow-x-hidden">
      <main className="mt-[100px] lg:mt-[147px]">
        <div className="container mx-auto">
          <Breadcrumb />
        </div>
        <OurProjects showBtn={false} />
        <HowWeWork />
        <OthersProjects />
        <Footer />
      </main>
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
export default OurProjectsPage;
