import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import { DefaultLayout } from "@/layouts/default.layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { RobotoUiDisplay } from "@/lib/fonts";

type ProjectProps = {
  frontMatter: {
    title: string;
    description: string;
    coverImage?: string;
    status?: string;
    pictureOne?: string;
    descriptionOne?: string;
    pictureTwo?: string;
    pictureThree?: string;
    pictureFour?: string;
    pictureFive?: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const ProjectPage = ({ frontMatter }: ProjectProps) => {
  return (
    <DefaultLayout className="overflow-x-hidden">
      <Header />
      <div className="container mx-auto px-4 py-12 mt-[100px] lg:max-w-[1170px] mb-[100px] md:mb-[150px] lg:mb-[200px]">
        <div className="mb-12">
          <h2
            className={`text-2xl md:text-[64px] font-light text-[#BDBDBD] ${RobotoUiDisplay.className} md:leading-[64px] tracking-[0%]`}
          >
            {frontMatter.title}
          </h2>
          <h3
            className={`text-xl md:text-[64px] font-bold mt-4 md:mt-[14px] ${RobotoUiDisplay.className}`}
          >
            Statuts:{" "}
            <span
              className={`${
                frontMatter.status === "En cours"
                  ? "text-[#DF4D1B]"
                  : "text-[#2C9C0A]"
              }`}
            >
              {frontMatter.status}
            </span>
          </h3>
        </div>

        {/* Main Cover Image */}
        {frontMatter.coverImage && (
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] mb-8 md:mb-12 overflow-hidden">
            <Image
              src={frontMatter.coverImage}
              alt={frontMatter.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-base text-gray-800 mb-10 md:mb-12 leading-relaxed">
          {frontMatter.description}
        </p>

        {frontMatter.pictureOne && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden">
              <Image
                src={frontMatter.pictureOne}
                alt={frontMatter.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p
                className={`${RobotoUiDisplay.className} text-gray-900 font-light whitespace-pre-line`}
              >
                {frontMatter.descriptionOne}
              </p>
            </div>
          </div>
        )}

        {/* Gallery Section (pictureTwo, pictureThree, pictureFour) */}
        {(frontMatter.pictureTwo ||
          frontMatter.pictureThree ||
          frontMatter.pictureFour) && (
          <div className="mt-4 space-y-6">
            {/* Grande image en haut */}
            {frontMatter.pictureTwo && (
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden mb-4">
                <Image
                  src={frontMatter.pictureTwo}
                  alt={`${frontMatter.title} - photo 2`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}
            {/* Grande image en haut */}
            {frontMatter.pictureFive && (
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden mb-8 md:mb-4">
                <Image
                  src={frontMatter.pictureFive}
                  alt={`${frontMatter.title} - photo 2`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}

            {/* Deux images côte à côte */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-4">
              {frontMatter.pictureThree && (
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                  <Image
                    src={frontMatter.pictureThree}
                    alt={`${frontMatter.title} - photo 3`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              {frontMatter.pictureFour && (
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                  <Image
                    src={frontMatter.pictureFour}
                    alt={`${frontMatter.title} - photo 4`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </DefaultLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const projectsDir = path.join(process.cwd(), "src/content/projects");
  const filenames = fs.readdirSync(projectsDir);

  const paths = [];
  for (const locale of locales || ["fr"]) {
    for (const filename of filenames) {
      paths.push({
        params: { slug: filename.replace(/\.mdx?$/, "") },
        locale,
      });
    }
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as { slug: string };
  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data: frontMatter, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
      ...(await serverSideTranslations(locale || "fr", ["common"])),
    },
  };
};

export default ProjectPage;
