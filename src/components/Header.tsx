import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/a5998d89-1111-405b-b923-c78fbc1de479.png" 
            alt="TallyCheck Logo" 
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold text-primary">TallyCheck</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-smooth animated-underline">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-smooth animated-underline">
            How It Works
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-smooth animated-underline">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-smooth animated-underline">
            Contact
          </a>
        </nav>

        <Button variant="default" className="shadow-elegant hover-lift hover-glow">
          Coming Soon
        </Button>
      </div>
    </header>
  );
};

export default Header;