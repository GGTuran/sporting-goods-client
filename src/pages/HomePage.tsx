


import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";

import HeroSection from "@/components/HeroSection/HeroSection";
import Contact from "./Contact";


const HomePage = () => {
    return (
        <div className="min-h-screen">
            
           
            <HeroSection></HeroSection>
            
            <FeaturedSection></FeaturedSection>
            
            <Contact></Contact>
     
        </div>
    );
};

export default HomePage;