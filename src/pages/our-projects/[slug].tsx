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

type ProjectProps = {
  frontMatter: {
    title: string;
    description: string;
    coverImage?: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const ProjectPage = ({ frontMatter, mdxSource }: ProjectProps) => {
  return (
    <DefaultLayout className="overflow-x-hidden">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[100px]">
        <div className="text-center lg:text-left mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#312783]">
            {frontMatter.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-3xl">
            {frontMatter.description}
          </p>
        </div>
        {frontMatter.coverImage && (
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-8">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 rounded-lg z-10"></div>
            {/* Cover Image */}
            <Image
              src={frontMatter.coverImage}
              alt={frontMatter.title}
              layout="fill"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        )}
        {/* Content */}
        <div className="prose prose-lg sm:prose-xl lg:prose-2xl mx-auto mt-10">
          <MDXRemote {...mdxSource} />
        </div>
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
