import Header from "@/components/Header";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DefaultLayout = ({
  children,
  className,
  ...props
}: DefaultLayoutProps) => {
  return (
    <>
      <div className="fixed top-4 right-4 z-40">
        <LanguageSwitcher />
      </div>
      <Header />
      <main className={className} {...props}>
        {children}
      </main>
    </>
  );
};
