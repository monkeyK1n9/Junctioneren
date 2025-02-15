import Banner from "@/components/Banner";
import CodeAndMeasurements from "@/components/CodeAndMeasurements";
import Footer from "@/components/Footer";
import { DefaultLayout } from "@/layouts/default.layout";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CodeAndMeasurements />
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
