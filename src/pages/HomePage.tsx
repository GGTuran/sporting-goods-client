

import ContactUs from "@/components/ContactUs/ContactUs";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";

import HeroSection from "@/components/HeroSection/HeroSection";


const HomePage = () => {
    return (
        <div className="min-h-screen">
            
           
            <HeroSection></HeroSection>
            
            <FeaturedSection></FeaturedSection>
            
            <ContactUs></ContactUs>
     
        </div>
    );
};

export default HomePage;