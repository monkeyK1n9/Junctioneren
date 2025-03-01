import Image from "next/image";
import Menu from "../ui/Menu";
import { CommonText } from "../ui/Work";
import images from "../../../public/imgs";

const OthersProjects = () => {
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[80%] lg:mx-auto">
      <div className="container mx-auto">
        <Menu
          title="Other projects"
          titleLink="See all galleries"
          path="#"
          show
        />
        <CommonText className="lg:mt-[41px] text-center lg:text-left">
          <span className="mx-4">Interior design</span> Conception, Construction
          dans la ville de Yaoundé
        </CommonText>
        <div className="my-[101px]">
          <div className="h-[300px] lg:h-[405px] relative">
            <Image
              src={images.Card4Img}
              alt="picture"
              className={"h-[300px] lg:h-[405px] object-cover rounded-md"}
              layout="fill"
            />
          </div>
          <div className="grid grid-cols-1 mt-[30px] lg:grid-cols-2 justify-center items-center gap-[30px]">
            <Image
              src={images.Card4Img}
              alt="picture"
              className={"h-[300px] lg:h-[355px] object-cover rounded-md"}
            />
            <Image
              src={images.Card4Img}
              alt="picture"
              className={"h-[300px] lg:h-[355px] object-cover rounded-md"}
            />
          </div>
          <div className="grid grid-cols-1 mt-[30px] lg:grid-cols-2 justify-center items-center gap-[30px]">
            <Image
              src={images.Card4Img}
              alt="picture"
              className={"h-[300px] lg:h-[255px] object-cover rounded-md"}
            />
            <Image
              src={images.Card4Img}
              alt="picture"
              className={"h-[300px] lg:h-[255px] object-cover rounded-md"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersProjects;
