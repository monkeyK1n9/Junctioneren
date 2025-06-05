import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
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
  };
  mdxSource: MDXRemoteSerializeResult;
};

const ProjectPage = ({ frontMatter, mdxSource }: ProjectProps) => {
  return (
    <DefaultLayout className="overflow-x-hidden">
      <Header />
      <div className="container mx-auto px-4 py-[64px] mt-[100px]">
        <div className="text-center lg:text-left mb-8">
          <h4
            className={`text-3xl lg:text-[64px] font-normal text-[#BDBDBD] ${RobotoUiDisplay.className}`}
          >
            {frontMatter.title}
          </h4>
          <h4
            className={`text-3xl lg:text-[60px] font-normal text-black ${RobotoUiDisplay.className} mt-[30px] font-bold`}
          >
            Status:{" "}
            <span
              className={`${
                frontMatter.status === "En cours"
                  ? "text-[#DF4D1B]"
                  : "text-[#2C9C0A]"
              } `}
            >
              {frontMatter.status}
            </span>
          </h4>
        </div>
        {frontMatter.coverImage && (
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-8">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
            {/* Cover Image */}
            <Image
              src={frontMatter.coverImage || ""}
              alt={frontMatter.title}
              layout="fill"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        )}
        {/* Content */}
        <p>{frontMatter.description}</p>
        {frontMatter.pictureOne && frontMatter.title && (
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-[32px] gap-y-8 lg:gap-x-[24px] items-center">
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px] relative">
              <Image
                src={frontMatter.pictureOne || ""}
                alt={frontMatter.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p
                className={`${RobotoUiDisplay.className} font-[300] text-black`}
              >
                {frontMatter.descriptionOne?.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
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

  // Générer les paths pour toutes les locales
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
      // Ajouter les traductions pour que le Header fonctionne
      ...(await serverSideTranslations(locale || "fr", ["common"])),
    },
  };
};

export default ProjectPage;
