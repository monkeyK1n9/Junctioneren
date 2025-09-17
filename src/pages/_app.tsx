import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "../style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <ToastContainer />
      </Theme>
    </>
  );
}

export default appWithTranslation(App);
