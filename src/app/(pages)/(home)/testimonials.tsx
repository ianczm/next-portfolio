import { HOME_TESTIMONIALS } from "@/data/frontend/testimonials";
import { Chip } from "@/ui/components/chip";
import {
  GradientText,
  Heading2,
  Heading3,
  Paragraph1,
  Paragraph2,
  Quote,
} from "@/ui/components/typography";
import { cn } from "@/ui/utils/tailwind";
import { ComponentProps } from "react";

export function TestimonialsSection({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("bg-dark-400", className)} {...props}>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-32 px-20 py-40">
        <div className="flex flex-col gap-10">
          <Heading2>Testimonials</Heading2>
          <hr className="border-light-100/40" />
        </div>
        {HOME_TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <Heading3>{testimonial.project}</Heading3>
              <GradientText as={Paragraph2} className="font-bold">
                {testimonial.clientName}
              </GradientText>
              <Paragraph1>{testimonial.clientTitle}</Paragraph1>
            </div>
            <div className="flex flex-col gap-10">
              <Quote>{testimonial.quote}</Quote>
              <div className="flex flex-wrap gap-2">
                {testimonial.tags.map((tag, index) => (
                  <Chip key={index}>{tag}</Chip>
                ))}
              </div>
            </div>
          </div>
        ))}
        <hr className="border-light-100/40" />
      </div>
    </div>
  );
}
