import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUS from "@/components/UI/HomePage/WhyUS/WhyUS";

const page = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUS />
      <HowItWorks />
    </>
  );
};

export default page;
