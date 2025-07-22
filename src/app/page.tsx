import Hero from "@/components/hero";
import About from "@/components/about";
import Repos from "@/components/repos";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />
      <Repos />
    </div>
  );
}
