import Footer from "@/ui/sections/footer";
import Redirect from "@/ui/sections/redirect";

export default function AboutPage() {
  return (
    <>
      <Redirect
        header="About Me"
        description="Please give this page a check again later, it's almost there!"
      >
        This page is still <span className="text-transparent">under construction</span>
      </Redirect>
      <Footer isSolidBackground />
    </>
  );
}
