import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DefaultLayout } from "@/layouts/default.layout";
import images from "../../../public/imgs";
import Image from "next/image";
import Menu from "@/components/ui/Menu";
import cn from "clsx";
import { RobotoUiDisplay } from "@/lib/fonts";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactUS = () => {
  const fontClass = cn(RobotoUiDisplay.variable, RobotoUiDisplay.className);
  return (
    <DefaultLayout className="overflow-auto">
      <Header />
      <section className="my-[150px] sm:my-[180px] lg:my-[243px] container mx-auto flex flex-col">
        <div className="grid grid-cols-12 lg:mt-[22px] gap-[10px] sm:gap-[20px] lg:gap-[30px] lg:h-[501px]">
          <div className="w-full col-span-12 lg:col-span-4 flex flex-col space-y-[10px]">
            <div>
              <Menu title="Contact" titleLink="" path="#" />
              <h4
                className={`text-[25px] sm:text-[30px] md:text-[40px] lg:text-[64px] text-black lg:leading-[64px] tracking-[0%] font-bold ${fontClass} text-center sm:text-left`}
              >
                Information
              </h4>
            </div>
            <div className="flex flex-col space-y-[20px] sm:space-y-[30px] lg:space-y-[40px] xl:space-y-[50px]">
              <p
                className={`${fontClass} font-bold lg:text-[18px] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                Junctioner Construction Engineering
                <br />
                <span className="font-light">Before Tradex Simbock</span>
              </p>
              <p
                className={`${fontClass} font-bold lg:text-[18px] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                (+237) 695 977 562
              </p>
              <p
                className={`${fontClass} font-light lg:text-[18px] lg:leading-[21.09px] text-[#333333] text-center lg:text-left`}
              >
                junctionerce@gmail.com
              </p>
              <button
                className={`${fontClass} font-normal lg:text-[12px] lg:leading-[12px] lg:tracking-[20%] text-white bg-[#312783] uppercase p-[12px] rounded lg:p-[30px] lg:w-[221.81px]`}
              >
                contact us
              </button>
            </div>
          </div>
          <div className="w-full col-span-12 lg:col-span-8 h-full pt-[20px] lg:pt-0">
            <Image
              src={images.MapImg}
              alt="picture"
              className="relative w-full h-auto lg:w-[1046px] lg:h-[501px]"
            />
          </div>
        </div>
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

export default ContactUS;
