import { TestimonialsSection } from "@/app/(pages)/(home)/testimonials";
import HeroImg from "@/assets/images/hero-gurulab.png";
import CardTypesImg from "@/assets/images/projects/gurulab/card-types.png";
import FormsImg from "@/assets/images/projects/gurulab/forms.png";
import Version1Img from "@/assets/images/projects/gurulab/gurulab-v1.png";
import Version2Img from "@/assets/images/projects/gurulab/gurulab-v2.png";
import InputsImg from "@/assets/images/projects/gurulab/inputs.png";
import PersonalizationImg from "@/assets/images/projects/gurulab/personalization.png";
import ReportSelectImg from "@/assets/images/projects/gurulab/report-select.png";
import TutorWireframeImg from "@/assets/images/projects/gurulab/tutor-wireframe.png";
import TypesettingImg from "@/assets/images/projects/gurulab/typesetting.png";
import WireframingImg from "@/assets/images/projects/gurulab/wireframing.png";
import { ArticleParagraph } from "@/ui/components/articles/article-paragraph";
import Button from "@/ui/components/button";
import Magnetic from "@/ui/components/interaction/magnetic";
import { ArticleImageParallax } from "@/ui/components/interaction/parallax";
import { GradientText, Heading1, Heading2 } from "@/ui/components/typography";
import Image from "next/image";

export default function GuruLabProjectPage() {
  return (
    <>
      <Image src={HeroImg} alt="GuruLab Hero Image" className="block h-[600px] object-cover" />
      <article className="flex flex-col gap-32 p-60">
        <section>
          <div className="mb-10 flex w-1/2 flex-col gap-10">
            <Heading2>Project Diary</Heading2>
            <Heading1 className="text-balance">
              A <span className="text-transparent">fresh new look</span> for GuruLab's official site
            </Heading1>
          </div>
          <div className="columns-2 gap-32">
            <ArticleParagraph>
              GuruLab is an edutech startup that was quickly growing in popularity among young
              English learners. Branding on social media was kicking into gear, which meant it was
              time to give the official site a cool makeover.
            </ArticleParagraph>
            <ArticleParagraph>
              It was a joy to build this project up from bare components to fully functioning pages.
              The immediate feedback from the team and the users only fueled my desire to make it
              even better. Each iteration felt more fulfilling than the last.
            </ArticleParagraph>
            <ArticleParagraph>
              I also had the pleasure of collaborating with a diverse team of business owners,
              curriculum specialists, content writers, illustrators, SEO specialists, marketing
              analytics and more.
            </ArticleParagraph>
            <ArticleParagraph>
              Thank you GuruLab for trusting me at this crucial stage of their growth and letting me
              grow alongside them. So began my first step into the world of web development.
            </ArticleParagraph>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-4 items-center gap-x-32">
            <div className="font-bold">
              <GradientText as="h3" className="mb-5">
                Role
              </GradientText>
              <p>Freelance Web Designer and Developer</p>
            </div>
            <div className="font-bold">
              <GradientText as="h3" className="mb-5">
                Duration
              </GradientText>
              <p>Start Dec 2021</p>
              <p>End Mar 2023</p>
            </div>
            <div className="font-bold">
              <GradientText as="h3" className="mb-5">
                Tools
              </GradientText>
              <p>Figma, HTML, CSS, JS, JQuery, Squarespace</p>
            </div>
            <Magnetic influence={24} className="rounded-full">
              <Button intent="primary" className="aspect-square w-full">
                Visit Site
              </Button>
            </Magnetic>
          </div>
        </section>
        <section>
          <ArticleImageParallax src={Version2Img} alt="GuruLab v1" imageClassname="aspect-[1.8]">
            The official site's new look
          </ArticleImageParallax>
        </section>
        <section>
          <div className="mb-10 flex w-1/2 flex-col gap-10">
            <Heading1 className="text-balance">
              <span className="text-transparent">A glance</span> back at v1 😳
            </Heading1>
          </div>
          <div className="columns-2 gap-32">
            <ArticleParagraph>
              Embarrassingly enough, v1 was the product of a young, naive me. With my newfound
              knowledge of how to center a div, I volunteered my web development skills to build the
              first version of GuruLab's official site.
            </ArticleParagraph>
            <ArticleParagraph>
              Lots of white, lots of boxes. Font sizes, spacing and alignment were at odds with each
              other. It just didn't feel very cohesive.
            </ArticleParagraph>
            <ArticleParagraph>
              Looking back, perhaps I could have pulled this white-themed style off. An inspiration
              would be Stripe, with a proper grid layout across the site, carefully chosen colours
              and a design system that kept everything consistent.
            </ArticleParagraph>
            <ArticleParagraph>
              Going into v2, I knew I wanted to bring out more of that cheerful yet bold GuruLab
              brand presence. I wanted an impression that was consistent across all pages.
            </ArticleParagraph>
          </div>
        </section>
        <section>
          <ArticleImageParallax src={Version1Img} alt="GuruLab v2" imageClassname="aspect-[1.8]">
            The first version of the home page
          </ArticleImageParallax>
        </section>
        <section>
          <div className="mb-10 flex w-1/2 flex-col gap-10">
            <Heading1 className="text-balance">
              From a <span className="text-transparent">feeling</span> to a system for{" "}
              <span className="text-transparent">design</span>
            </Heading1>
          </div>
          <div className="columns-2 gap-32">
            <ArticleParagraph>Playful, friendly and welcoming.</ArticleParagraph>
            <ArticleParagraph>
              Matching the warm tone of the copywriting and giving the illustrations a place to
              belong were important. The solid brand colours were bold enough, but they needed
              something more to make them feel vibrant and energetic.
            </ArticleParagraph>
            <ArticleParagraph>
              Bold gradients helped set the overall tone and brand presence. Large blocks of them
              felt immersive. Off-whites helped with visual hierarchy through subtle layering.
            </ArticleParagraph>
            <ArticleParagraph>
              Going into v2, I knew I wanted to bring out more of that cheerful yet bold GuruLab
              brand presence. I wanted an impression that was consistent across all pages.
            </ArticleParagraph>
            <ArticleParagraph>
              Rounded edges gave a sense of familiarity and complemented GuruLab's selection of
              Nunito Sans as the sitewide font.
            </ArticleParagraph>
            <ArticleParagraph>
              This helped set the foundation for consistent-looking components. From there, buttons
              and inputs followed with standardized states. Cards replaced the boxy look and form
              the building blocks of the site.
            </ArticleParagraph>
            <ArticleParagraph>
              Compound cards can be seen taking up entire sections. They have a two column layout.
              One side takes the background gradient to highlight something important. The other
              remains neutral for the details and allows CTAs to shine through.
            </ArticleParagraph>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-x-32">
          <div className="mt-32 flex flex-col gap-16">
            <ArticleImageParallax src={InputsImg} alt="Inputs" imageClassname="aspect-[1.65]">
              Input error states
            </ArticleImageParallax>
            <ArticleImageParallax src={FormsImg} alt="Forms" imageClassname="aspect-[0.825]">
              Forms are more uniform
            </ArticleImageParallax>
          </div>
          <div className="flex flex-col gap-16">
            <ArticleImageParallax
              src={CardTypesImg}
              alt="Cards and Component Cards"
              imageClassname="aspect-[0.825]"
            >
              Usage of cards and compound variants
            </ArticleImageParallax>
            <ArticleImageParallax
              src={TypesettingImg}
              alt="Typesetting"
              imageClassname="aspect-[1.65]"
            >
              Typesetting reference
            </ArticleImageParallax>
          </div>
        </section>
        <section>
          <div className="mb-10 flex w-1/2 flex-col gap-10">
            <Heading1 className="text-balance">
              Prototyping and <span className="text-transparent">building static pages</span>
            </Heading1>
          </div>
          <div className="columns-2 gap-32">
            <ArticleParagraph>
              This stage was where the real fun began. From the brief and the calls that followed, I
              would digest context about the psychology of parents and students, their navigation
              patterns, the content that appealed to them and more.
            </ArticleParagraph>
            <ArticleParagraph>
              One of the initiatives from GuruLab was to gamify the classroom with Paw Points.
              Students who performed well would earn Paw Points. These can be used to redeem pretty
              cool things later on.
            </ArticleParagraph>
            <ArticleParagraph>
              With the Figma specifications, it was much easier to write code for the designs.
              However, requiring so much customization proved difficult on a Squarespace project.
            </ArticleParagraph>
            <ArticleParagraph>
              The global CSS file formed the backbone of the project. All CSS variables and reusable
              classes were parked there. Markup was stored in template tags and cloned with JQuery
              where needed. Everything was version controlled in a separate Git repository.
            </ArticleParagraph>
            <ArticleParagraph>
              It wasn't exactly pretty, but it made working on the site faster and easier to
              maintain. Squarespace was certainly an interesting challenge to take on.
            </ArticleParagraph>
          </div>
        </section>
        <section>
          <ArticleImageParallax
            src={WireframingImg}
            alt="Figma Wireframing"
            imageClassname="aspect-[1.8]"
            useGradient={false}
          >
            Making use of Figma prototypes and component variants for the redemption catalogue
          </ArticleImageParallax>
        </section>
        <section>
          <div className="mb-10 flex w-1/2 flex-col gap-10">
            <Heading1 className="text-balance">
              Loading data with <span className="text-transparent">dynamic pages</span>
            </Heading1>
          </div>
          <div className="columns-2 gap-32">
            <ArticleParagraph>
              The semester was ending. Parents and students were about to get a report, and it would
              come in the form of a highly-personalised page featuring performance scores and
              tailored feedback.
            </ArticleParagraph>
            <ArticleParagraph>
              One of the initiatives from GuruLab was to gamify the classroom with Paw Points.
              Students who performed well would earn Paw Points. These can be used to redeem pretty
              cool things later on.
            </ArticleParagraph>
            <ArticleParagraph>
              After lengthy discussions about cost, security and maintenance, we settled on a
              minimum viable solution.
            </ArticleParagraph>
            <ArticleParagraph>
              This meant writing custom integrations and eventually a lightweight library to map
              responses to components in a maintainable way.
            </ArticleParagraph>
            <ArticleParagraph>
              After this page, marketing pushed more initiatives leading to further
              behind-the-scenes integrations across the site such as analytics, newsletter
              subscriptions, referral links, sales and more.
            </ArticleParagraph>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-x-32">
          <ArticleImageParallax
            src={PersonalizationImg}
            alt="Personalized Report Sections"
            imageClassname="aspect-[0.825]"
            useGradient={false}
          >
            The personalized learning report
          </ArticleImageParallax>
          <ArticleImageParallax
            src={ReportSelectImg}
            alt="Report Selection"
            imageClassname="mt-32 aspect-[0.825]"
          >
            Parents can select which semester report to view
          </ArticleImageParallax>
        </section>
        <section>
          <div className="mb-10 flex w-1/2 flex-col gap-10">
            <Heading1 className="text-balance">
              <span className="text-transparent">My takeaways</span> at the end of the day
            </Heading1>
          </div>
          <div className="columns-2 gap-32">
            <ArticleParagraph>
              As a first-time freelancer and a beginner to web development, working on a project
              like this was way out of my comfort zone.
            </ArticleParagraph>
            <ArticleParagraph>
              For me, the only way to really grow is to keep pushing that boundary. “There's only
              one way to find out” can sound like famous last words. But I believe there's truth to
              it.
            </ArticleParagraph>
            <ArticleParagraph>
              Launching myself into this unknown, I met a team of such passionate and driven people.
              I grew so much with their guidance, and was exposed to very different perspectives.
            </ArticleParagraph>
            <ArticleParagraph>
              The challenges were unique and brain-tickling. It was fun solving them and seeing what
              used to be an idea come to life for thousands of people to see and touch.
            </ArticleParagraph>
            <ArticleParagraph>
              For technical things to improve, creating a proper design system is definitely one of
              them. For my future self, I would have loved to have a well-documented process for
              study and reference.
            </ArticleParagraph>
            <ArticleParagraph>
              If there's one thing I learned about myself, it's that always wanting to do things the
              "correct" way can lead to over-analyzing and spending effort in the wrong places.
            </ArticleParagraph>
            <ArticleParagraph>
              Sometimes, the best way is the simplest way. It can feel unconventional, but all it
              takes is an open mind and a listening ear to truly understand what the users need.
            </ArticleParagraph>
          </div>
        </section>
        <section>
          <ArticleImageParallax
            src={TutorWireframeImg}
            alt="Wireframes Comparison"
            imageClassname="aspect-[1.8]"
          >
            A wireframe for a chat interface I proposed (back) versus the interface tutors actually
            needed (front)
          </ArticleImageParallax>
        </section>
      </article>
      <TestimonialsSection />
    </>
  );
}
