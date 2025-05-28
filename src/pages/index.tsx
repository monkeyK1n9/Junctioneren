import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "@/components/Banner";
import CodeAndMeasurements from "@/components/CodeAndMeasurements";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import OurProjects from "@/components/OurProject";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import { DefaultLayout } from "@/layouts/default.layout";
import SlideUp from "@/components/Animation/SlideUp";
import { useTranslation } from "next-i18next";
import Menu from "@/components/ui/Menu";

const Home = () => {
  const { t } = useTranslation("common");
  return (
    <DefaultLayout className="overflow-x-hidden">
      <Banner />
      <CodeAndMeasurements />
      <WhatWeDo />
      <OurProjects showBtn />
      <section className="bg-[#f1f1f1] py-[30px] sm:py-[50px] md:py-[80px] lg:py-[131px] rounded-[43px]">
        <SlideUp delay={0.3}>
          <div className="lg:max-w-[80%] lg:mx-auto">
            <Menu
              title={t("whoWeAre.title")}
              titleLink={t("whoWeAre.link")}
              path="/who-we-are"
              show
            />
            <WhoWeAre />
          </div>
        </SlideUp>
      </section>
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
