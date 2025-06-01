import { fontClassRoboto } from "@/pages/who-we-are";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type Crumb = {
  label: string;
  href: string;
};

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

const Breadcrumb = () => {
  const router = useRouter();
  const segments = router.asPath.split("?")[0].split("/").filter(Boolean);
  const { t } = useTranslation("common");

  const crumbs: Crumb[] = segments.map((seg, idx) => ({
    label: capitalize(seg),
    href: "/" + segments.slice(0, idx + 1).join("/"),
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-[120px] lg:mt-[100px] lg:ml-2 flex justify-center lg:justify-start"
    >
      <ol
        className={`flex flex-wrap items-center text-sm text-gray-500 space-x-2 ${fontClassRoboto}`}
      >
        <li>
          <Link href="/" className="hover:text-[#DF4D1B] font-medium">
            {t("navigation.welcome", "Welcome")}
          </Link>
        </li>
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center">
            <span className="mx-2">/</span>
            {idx === crumbs.length - 1 ? (
              <span className="text-[#DF4D1B] font-semibold">
                {t(
                  `breadcrumb.${crumb.label.toLowerCase().replace(/\s/g, "")}`
                )}
                {/* {t("navigation.projects")} */}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-[#DF4D1B] font-medium"
              >
                {t(
                  `breadcrumb.${crumb.label.toLowerCase().replace(/\s/g, "")}`
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
