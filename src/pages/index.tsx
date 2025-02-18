import Banner from "@/components/Banner";
import CodeAndMeasurements from "@/components/CodeAndMeasurements";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import OurProjects from "@/components/OurProject";
import WhoWeAre from "@/components/WhoWeAre";
import { DefaultLayout } from "@/layouts/default.layout";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CodeAndMeasurements />
      <OurProjects />
      <WhoWeAre />
      <ContactUs />
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
