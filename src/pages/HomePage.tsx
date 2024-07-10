


import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";

import HeroSection from "@/components/HeroSection/HeroSection";
import Contact from "./Contact";
import Category from "@/components/Category/Category";



const HomePage = () => {
    return (
        <div className="min-h-screen">
            
           
            <HeroSection></HeroSection>
            
            <FeaturedSection></FeaturedSection>
            <Category></Category>
            
            <Contact></Contact>
     
        </div>
    );
};

export default HomePage;