import Menu from "../ui/Menu";
import { CommonText, Work } from "../ui/Work";

const HowWeWork = () => {
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[80%] lg:mx-auto">
      <div className="container mx-auto">
        <Menu title="How we work" titleLink="" path="#" />
        <CommonText className="lg:mt-[41px] text-center lg:text-left">
          Below is a chart that shows how we organise our projects from start to
          finish.
        </CommonText>
        <div className="mt-[101px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[46px]">
            <div className="hidden lg:flex" />
            <Work
              title="Chef de projet"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
          </div>
          <hr className="my-[29px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[46px]">
            <Work
              title="ing genie civil"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
            <Work
              title="control de document"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
            <Work
              title="architect"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
          </div>
          <hr className="my-[29px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[46px]">
            <Work
              title="ing genie civil"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
            <Work
              title="control de document"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
            <Work
              title="architect"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
          </div>
          <hr className="my-[29px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[46px]">
            <div />
            <Work
              title="architect"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
            <Work
              title="ing genie civil"
              description="Below is a chart that shows how we organise our projects from start to finish."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
