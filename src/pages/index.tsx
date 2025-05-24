import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "@/components/Banner";
import CodeAndMeasurements from "@/components/CodeAndMeasurements";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurProjects from "@/components/OurProject";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { DefaultLayout } from "@/layouts/default.layout";

const Home = () => {
  return (
    <DefaultLayout className="overflow-x-hidden">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Header />
      <Banner />
      <CodeAndMeasurements />
      <WhatWeDo />
      <OurProjects showBtn />
      <WhoWeAre />
      <ContactUs />
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

export default Home;
