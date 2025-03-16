import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { DefaultLayout } from "@/layouts/default.layout";
import { RobotoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import images from "../../../public/imgs";
import Footer from "@/components/Footer";
import { CadreZone, LargeCadreZone } from "@/components/ui/CadreZone";

const fontClassRoboto = cn(RobotoUiDisplay.className, RobotoUiDisplay.variable);
type CardType = {
  name: string;
  occupation: string;
  content: string;
  pic: any;
};
const datas: CardType[] = [
  {
    name: "NGALANDEU KWEMO",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Architect",
    pic: images.Prof3,
  },
  {
    name: "MASSENE Noelle",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Ingenieur",
    pic: images.Prof2,
  },
  {
    name: "Moïse Christopher",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Civil Engineer",
    pic: images.Prof1,
  },
  {
    name: "NGALANDEU KWEMO",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Architect",
    pic: images.Prof3,
  },
  {
    name: "MASSENE Noelle",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Ingenieur",
    pic: images.Prof2,
  },
  {
    name: "Moïse Christopher",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Civil Engineer",
    pic: images.Prof1,
  },
  {
    name: "NGALANDEU KWEMO",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Architect",
    pic: images.Prof3,
  },
  {
    name: "MASSENE Noelle",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Ingenieur",
    pic: images.Prof2,
  },
  {
    name: "Moïse Christopher",
    content:
      "Description of team memeber will be inserted here. The description should be very brief",
    occupation: "Civil Engineer",
    pic: images.Prof1,
  },
];

const WhoWeArePage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DefaultLayout>
      <Header />
      <main className="mt-[40px] sm:mt-[60px] lg:mt-[84px]">
        <section className="py-[20px] lg:py-[46px] lg:max-w-[80%] lg:mx-auto px-2 lg:px-0">
          <h5
            className={`${fontClassRoboto} text-[#BDBDBD] font-[300] text-[40px] sm:text-[50px] lg:text-[64px] leading-[64px] tracking-[0%]`}
          >
            Meet our team
          </h5>
          <h5
            className={`${fontClassRoboto} text-[#333333] font-[700] text-[40px] sm:text-[50px] lg:text-[64px] leading-[50px] sm:leading-[50px] lg:leading-[75px] tracking-[0%] lg:max-w-[986px] mt-[25px]`}
          >
            Meet the junctioners that makes everything possible
          </h5>
          <div className="mt-[100px]">
            <div className="pb-[250px] lg:pb-0">
              {isLargeScreen ? (
                <LargeCadreZone
                  content={
                    "Kacdeu Baudoin is a Cameroonian civil engineer, graphic designer, and entrepreneur. He is the founder of Junctioner Construction Engineering, and President of Africa Rural School Empowerment, all of which are based in Cameroon. He is also a former president of the Civil Engineering Club at the National Advanced School of Public Works (ENSTP) in Yaoundé.Kacdeu is passionate about using technology to improve the construction industry in Africa. He is a frequent speaker at conferences and workshops on the topic of artificial intelligence (AI) and construction. In 2022, he was invited to speak on the panel of the second Conference on the Application of AI in the Construction Industry at ENSTP."
                  }
                  name={"Kacdeu Baudoin"}
                  occupation={"CEO Founder"}
                  pic={images.Prof4}
                />
              ) : (
                <CadreZone
                  content={
                    "Kacdeu Baudoin is a Cameroonian civil engineer, graphic designer, and entrepreneur. He is the founder of Junctioner Construction Engineering, and President of Africa Rural School Empowerment, all of which are based in Cameroon. He is also a former president of the Civil Engineering Club at the National Advanced School of Public Works (ENSTP) in Yaoundé.Kacdeu is passionate about using technology to improve the construction industry in Africa. He is a frequent speaker at conferences and workshops on the topic of artificial intelligence (AI) and construction. In 2022, he was invited to speak on the panel of the second Conference on the Application of AI in the Construction Industry at ENSTP."
                  }
                  name={"Kacdeu Baudoin"}
                  occupation={"CEO Founder"}
                  pic={images.Prof4}
                />
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[46px] lg:gap-y-[100px]">
              {datas.map((item, index) => (
                <CadreZone
                  key={index}
                  content={item.content}
                  name={item.name}
                  occupation={item.occupation}
                  pic={item.pic}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </DefaultLayout>
  );
};

export default WhoWeArePage;
