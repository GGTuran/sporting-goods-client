
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";

import HeroSection from "@/components/HeroSection/HeroSection";


const HomePage = () => {
    return (
        <div className="min-h-screen">
            <h1>Home sweet home</h1>
           
            <HeroSection></HeroSection>
            
            <FeaturedSection></FeaturedSection>
           
     
        </div>
    );
};

export default HomePage;