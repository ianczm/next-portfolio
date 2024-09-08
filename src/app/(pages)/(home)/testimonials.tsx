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

export function TestimonialsSection() {
  return (
    <div className="bg-dark-400">
      <div className="flex flex-col gap-32 p-60">
        <div className="flex flex-col gap-10">
          <Heading2>What Clients Said</Heading2>
          <hr />
        </div>
        {HOME_TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="grid grid-cols-[1fr_2fr] gap-10">
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
        <hr />
      </div>
    </div>
  );
}
