import HeroImage from "@/components/custom/HeroImage";
import HeroText from "@/components/custom/HeroText";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Hero = () => {
  return (
    <div className="relative antialiased">
      <div className="fixed left-0 top-0 -z-20 h-screen w-screen">
        <div className="relative h-screen w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-6 mt-24 md:mt-0 md:mx-auto min-h-[80vh] flex md:flex-row flex-col-reverse items-center justify-between gap-10 relative antialiased">
        <div className="flex-1">
          <HeroText />
        </div>
        <div className="flex-1">
          <HeroImage />
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Hero;
