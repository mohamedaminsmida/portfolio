import About from "@/components/about";
// import Blog from "@/components/blog";
import Contact from "@/components/contact";
import CustomCursor from "@/components/custom-cursor";
import Experience from "@/components/experience";
import Expertise from "@/components/expertise";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ThreeBackground from "@/components/three-background";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <ThreeBackground />
      <CustomCursor />
      <Intro />
      <SectionDivider />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}
