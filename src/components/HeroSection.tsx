import { Button } from "@/components/ui/button";
import { ArrowRight, Bluetooth, QrCode, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-sm font-medium text-primary bg-brand-light px-3 py-1 rounded-full">
              Smart. Seamless. Student Attendance.
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Revolutionizing Student Attendance
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            TallyCheck is a modern attendance tracking system that uses Bluetooth and QR technology to make student check-ins fast, secure, and verifiable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="shadow-glow group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-brand-light">
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Bluetooth className="h-5 w-5 text-primary" />
              <span className="text-sm">Bluetooth Beacons</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <QrCode className="h-5 w-5 text-primary" />
              <span className="text-sm">QR Code Scanning</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm">Real-time Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;