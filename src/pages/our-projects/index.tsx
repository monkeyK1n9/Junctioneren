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
      <section>
        <OurProjects showBtn={false} showBreadcrumb />
        <HowWeWork />
        <OthersProjects />
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
export default OurProjectsPage;
