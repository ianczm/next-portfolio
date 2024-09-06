import { Chip } from "@/ui/components/chip";
import { Heading2, Heading3, Paragraph1, Paragraph2, Quote } from "@/ui/components/typography";
import { GradientText } from "@/ui/components/typography/gradient-text";

export function TestimonialsSection() {
  return (
    <>
      <div className="bg-dark-400">
        <div className="flex flex-col gap-32 p-60">
          <div className="flex flex-col gap-10">
            <Heading2>What Clients Said</Heading2>
            <hr />
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-10">
            <div>
              <Heading3>GuruLab</Heading3>
              <GradientText as={Paragraph2} className="font-bold">
                Emily Neoh
              </GradientText>
              <Paragraph1>Curriculum Content Lead</Paragraph1>
            </div>
            <div className="flex flex-col gap-10">
              <Quote>
                I enjoyed working with Ian. He grasped the project's principles and requirements
                quickly, delivering outcomes to a high standard. I also valued the enthusiasm and
                excellent communication that Ian brought, and would recommend his web development
                services with no hesitation.
              </Quote>
              <div className="flex gap-2">
                <Chip>Freelance</Chip>
                <Chip>Full business site</Chip>
                <Chip>Landing pages</Chip>
                <Chip>Layout and design</Chip>
                <Chip>Dynamic reports</Chip>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
