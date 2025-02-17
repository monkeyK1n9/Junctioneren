import Menu from "../ui/Menu";

const ContactUs = () => {
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[80%] lg:mx-auto">
      <div className="container mx-auto">
        <Menu title="Contact Us" titleLink="" path="#" />
        <div className="grid grid-cols-12 mt-[22px] gap-[30px]">
          <div className="w-full col-span-12 lg:col-span-5"></div>
          <div className="w-full col-span-12 lg:col-span-7"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
