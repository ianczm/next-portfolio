import { ComponentProps } from "react";

export function ArticleParagraph({ children }: ComponentProps<"p">) {
  return <p className="mb-10 text-pretty font-bold text-light-100/75">{children}</p>;
}
