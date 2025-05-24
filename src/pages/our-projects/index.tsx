import { DefaultLayout } from "@/layouts/default.layout";
import OurProjects from "@/components/OurProject";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";
import OthersProjects from "@/components/OthersProjects";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const OurProjectsPage = () => {
  const { t } = useTranslation("common");
  return (
    <DefaultLayout className="overflow-x-hidden">
      <Header />
      <main className="mt-[40px] sm:mt-[80px] lg:mt-[147px]">
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
