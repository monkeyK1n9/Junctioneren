import localFont from "next/font/local";

/**
 * Roboto
 */
export const RobotoUiDisplay = localFont({
  src: [
    {
      path: "../fonts/Roboto/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Roboto/medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Roboto/bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-roboto-ui-display",
  preload: true,
});
