import Banner from "@/components/Banner";
import CodeAndMeasurements from "@/components/CodeAndMeasurements";
import Footer from "@/components/Footer";
import OurProjects from "@/components/OurProject";
import { DefaultLayout } from "@/layouts/default.layout";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CodeAndMeasurements />
      <OurProjects />
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
