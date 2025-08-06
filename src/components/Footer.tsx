import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/a5998d89-1111-405b-b923-c78fbc1de479.png" 
                alt="TallyCheck Logo" 
                className="h-6 w-6"
              />
              <span className="text-xl font-bold text-primary">TallyCheck</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing student attendance tracking with smart Bluetooth and QR technology for Kenyan universities.
            </p>
            <p className="text-sm text-muted-foreground">
              Smart. Seamless. Student Attendance.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">How It Works</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a></li>
              <li><span className="text-muted-foreground">Documentation (Soon)</span></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:caesar@tallycheck.co.ke" className="text-muted-foreground hover:text-primary transition-smooth">Email Us</a></li>
              <li><a href="tel:+254791578882" className="text-muted-foreground hover:text-primary transition-smooth">+254 791 578 882</a></li>
              <li><span className="text-muted-foreground">Nairobi, Kenya</span></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 TallyCheck. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;