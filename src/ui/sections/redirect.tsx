import ArticleHeaderWrapper from "@/ui/components/articles/article-header-wrapper";
import { ArticleParagraph } from "@/ui/components/articles/article-paragraph";
import ButtonLink from "@/ui/components/button-link";
import Magnetic from "@/ui/components/interaction/magnetic";
import { Heading1, Heading2 } from "@/ui/components/typography";
import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

interface RedirectProps extends ComponentProps<"article"> {
  header: string;
  description: string;
}

export default function Redirect({
  className,
  children,
  header,
  description,
  ...props
}: RedirectProps) {
  return (
    <article
      className={cn(
        "mx-auto flex max-w-screen-2xl flex-col gap-16 px-6 pb-16 pt-48 sm:px-8 md:px-20 md:pb-40 md:pt-60",
        className,
      )}
      {...props}
    >
      <section className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_1fr]">
        <div>
          <ArticleHeaderWrapper className="!w-full">
            <Heading2>{header}</Heading2>
            <Heading1 className="text-balance">{children}</Heading1>
          </ArticleHeaderWrapper>
          <ArticleParagraph>{description}</ArticleParagraph>
        </div>
        <Magnetic
          influence={24}
          className="rounded-full lg:aspect-square lg:h-full lg:max-h-[300px] lg:max-w-[300px] lg:place-self-center"
        >
          <ButtonLink
            intent="primary"
            href="https://www.mygurulab.com/"
            className="w-fit lg:h-full lg:w-full lg:p-0"
            target="_blank"
          >
            Back to home
          </ButtonLink>
        </Magnetic>
      </section>
    </article>
  );
}
