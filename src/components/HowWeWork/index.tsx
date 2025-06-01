import Menu from "../ui/Menu";
import { CommonText, Work } from "../ui/Work";

const HowWeWork = () => {
  return (
    <section className="py-[20px] lg:py-[46px] lg:max-w-[80%] lg:mx-auto px-4 lg:px-0">
      <Menu title="How we work" titleLink="" path="#" />
      <CommonText className="lg:mt-[41px] text-center lg:text-left">
        Below is a chart that shows how we organise our projects from start to
        finish.
      </CommonText>
      <div className="mt-[30px] lg:mt-[101px]">
        {/* Première ligne - Chef de projet centré */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[46px]">
          <div className="hidden lg:flex" />
          <Work
            title="CHEF DE PROJET"
            description="Responsable de la supervision globale des projets."
          />
        </div>

        <hr className="hidden lg:flex my-[29px]" />

        {/* Deuxième ligne - 3 postes */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <Work
            title="ARCHITECT"
            description="Responsable de la supervision globale des projets."
          />
          <Work
            title="ING GENIE CIVIL"
            description="Responsable de la conception et de la mise en œuvre des structures et des systèmes de construction."
          />
          <Work
            title="CONTROL DE DOCUMENT"
            description="Gère la documentation et assure la cohérence des informations tout au long du projet."
          />
        </div>

        <hr className="hidden lg:flex my-[29px]" />

        {/* Troisième ligne - 3 postes */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <Work
            title="INGÉNIEUR DE CHANTIER"
            description="Supervise la planification et l'exécution des travaux sur le terrain."
          />
          <Work
            title="GÉOMÈTRE"
            description="Effectue des relevés topographiques et des mesures pour soutenir la conception et la construction."
          />
          <Work
            title="CONTRÔLEUR GÉNÉRAL"
            description="Assure la qualité globale du projet en supervisant les différents aspects et en garantissant la conformité aux normes."
          />
        </div>

        <hr className="hidden lg:flex my-[29px]" />

        {/* Cinquième ligne - 2 postes centrés */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <div className="hidden xl:flex" />
          <Work
            title="RESPONSABLE ÉLECTRIQUE"
            description="Gère la conception et l'installation des systèmes électriques du projet."
          />
          <Work
            title="RESPONSABLE MAÇONNERIE"
            description="Supervise les travaux de construction en lien avec la maçonnerie et les matériaux de construction."
          />
        </div>

        <hr className="hidden lg:flex my-[29px]" />
        {/* Quatrième ligne - 3 postes */}
        <div className="mt-[20px] lg:mt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-[20px] sm:gap-y-[30px] lg:gap-y-[40px]">
          <Work
            title="RESPONSABLE PLOMBERIE"
            description="Responsable de la conception et de l'installation des systèmes de plomberie du projet."
          />
          <Work
            title="RESPONSABLE MENUISERIE"
            description="Gère la conception et la réalisation des éléments de menuiserie et de finition."
          />
          <Work
            title="RESPONSABLE CHAUDRERIE"
            description="Supervise la conception et l'installation des systèmes de structure métallique."
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
