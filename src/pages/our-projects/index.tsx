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
import { NextSeo } from "next-seo";

const OurProjectsPage = () => {
  const { t } = useTranslation("common");
  return (
    <DefaultLayout className="overflow-x-hidden">
      <NextSeo
        title={t("projectSeo.title")}
        description={t("projectSeo.description")}
        canonical="https://junctioneren.com/our-projects"
        openGraph={{
          url: "https://junctioneren.com/our-projects",
          title: "Nos Projets | Junctioner Construction Engineering",
          description:
            "Un aperçu de nos réalisations dans le secteur de la construction et de l’ingénierie.",
          images: [
            {
              url: "https://junctioneren.com/favicon.svg",
              width: 1200,
              height: 630,
              alt: "Projets de Junctioner Construction Engineering",
              type: "image/jpeg",
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
