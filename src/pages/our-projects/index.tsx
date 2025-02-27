import { DefaultLayout } from "@/layouts/default.layout";
import OurProjects from "@/components/OurProject";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";

const OurProjectsPage = () => {
  return (
    <DefaultLayout className="overflow-x-hidden">
      <Header />
      <main className="mt-[40px] sm:mt-[80px] lg:mt-[147px]">
        <OurProjects showBtn={false} />
        <HowWeWork />
        <Footer />
      </main>
    </DefaultLayout>
  );
};

export default OurProjectsPage;
