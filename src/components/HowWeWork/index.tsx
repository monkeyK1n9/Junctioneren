import { useTranslation } from "next-i18next";
import Menu from "../ui/Menu";
import { CommonText, Work } from "../ui/Work";

const HowWeWork = () => {
  const { t } = useTranslation("common");
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[1170px] lg:mx-auto px-4 lg:px-0">
      <Menu title={t("projectPage.title")} titleLink="" path="#" />
      <CommonText className="lg:mt-[41px] text-center lg:text-left">
        {t("projectPage.description")}
      </CommonText>
      <div className="mt-[30px] lg:mt-[101px]">
        {/* Première ligne - Chef de projet centré */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[46px]">
          <div className="hidden lg:flex" />
          <Work title={t("projectPage.p1")} description={t("projectPage.d1")} />
        </div>

        <hr className="hidden lg:flex my-[29px]" />

        {/* Deuxième ligne - 3 postes */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <Work title={t("projectPage.p2")} description={t("projectPage.d2")} />
          <Work title={t("projectPage.p3")} description={t("projectPage.d3")} />
          <Work title={t("projectPage.p4")} description={t("projectPage.d4")} />
        </div>

        <hr className="hidden lg:flex my-[29px]" />

        {/* Troisième ligne - 3 postes */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <Work title={t("projectPage.p5")} description={t("projectPage.d5")} />
          <Work title={t("projectPage.p6")} description={t("projectPage.d6")} />
          <Work title={t("projectPage.p7")} description={t("projectPage.d7")} />
        </div>

        <hr className="hidden lg:flex my-[29px]" />

        {/* Cinquième ligne - 2 postes centrés */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <div className="hidden xl:flex" />
          <Work title={t("projectPage.p8")} description={t("projectPage.d8")} />
          <Work title={t("projectPage.p9")} description={t("projectPage.d9")} />
        </div>

        <hr className="hidden lg:flex my-[29px]" />
        {/* Quatrième ligne - 3 postes */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <Work
            title={t("projectPage.p10")}
            description={t("projectPage.d10")}
          />
          <Work
            title={t("projectPage.p11")}
            description={t("projectPage.d11")}
          />
          <Work
            title={t("projectPage.p12")}
            description={t("projectPage.d12")}
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
