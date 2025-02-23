import localFont from "next/font/local";

/**
 * Roboto
 */
export const RobotoUiDisplay = localFont({
  src: [
    {
      path: "../fonts/Roboto/light.ttf",
      weight: "300",
      style: "normal",
    },
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

/**
 * Inter
 */
export const InterUiDisplay = localFont({
  src: [
    {
      path: "../fonts/Inter/ligth.ttf",
      weight: "300",
      style: "ligth",
    },
    {
      path: "../fonts/Inter/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter/bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-inter-ui-display",
  preload: true,
});
