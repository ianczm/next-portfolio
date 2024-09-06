type Testimonial = {
  id: number;
  project: string;
  clientName: string;
  clientTitle: string;
  quote: string;
  tags: string[];
};

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    project: "GuruLab",
    clientName: "Emily Neoh",
    clientTitle: "Curriculum Content Lead",
    quote:
      "I enjoyed working with Ian. He grasped the project's principles and requirements quickly, delivering outcomes to a high standard. I also valued the enthusiasm and excellent communication that Ian brought, and would recommend his web development services with no hesitation.",
    tags: [
      "Freelance",
      "Full business site",
      "Landing pages",
      "Layout and design",
      "Dynamic reports",
    ],
  },
];
