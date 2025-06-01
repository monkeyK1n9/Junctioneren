export const cleanText = (text: string, size: number) => {
  return text?.slice(0, size) + (text?.length > size ? "..." : "");
};
