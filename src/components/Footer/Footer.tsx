import FacebookIcon from "@/assets/icons/FacebookIcon"
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";


const Footer = () => {
    return (



    <footer className="bg-muted py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <nav className="grid gap-2">
            <a href="/about-us" className="hover:underline hover:underline-offset-4" >
              About
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Team
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Careers
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Blog
            </a>
          </nav>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Products</h3>
          <nav className="grid gap-2">
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Features
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Pricing
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Integrations
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Enterprise
            </a>
          </nav>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <nav className="grid gap-2">
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Documentation
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Support
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              Guides
            </a>
            <a href="#" className="hover:underline hover:underline-offset-4" >
              API
            </a>
          </nav>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Social</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground" >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground" >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground" >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground" >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


   

export default Footer;