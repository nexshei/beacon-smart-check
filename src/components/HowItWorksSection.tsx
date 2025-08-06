import { Card, CardContent } from "@/components/ui/card";
import { Bluetooth, QrCode, Shield, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple methods to track attendance automatically and securely.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* BLE Attendance */}
          <Card className="border-primary/10 hover:shadow-elegant transition-smooth group relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-glow">
                <Bluetooth className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">BLE Attendance</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">App detects beacon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">2+ minutes of presence → automatic attendance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Works in background silently</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* QR Code Attendance */}
          <Card className="border-primary/10 hover:shadow-elegant transition-smooth group relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-glow">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">QR Code Attendance</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Lecturer generates QR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Students scan within valid time/location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Secure & instant</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Device Binding */}
          <Card className="border-primary/10 hover:shadow-elegant transition-smooth group relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth shadow-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Device Binding</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Accounts tied to a student's device</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Admin must approve device changes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Prevents proxy attendance</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Flow */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Simple Process Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mb-2 mx-auto">
                1
              </div>
              <p className="text-sm text-muted-foreground">Student enters classroom</p>
            </div>
            <ArrowRight className="h-6 w-6 text-primary hidden md:block" />
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mb-2 mx-auto">
                2
              </div>
              <p className="text-sm text-muted-foreground">Beacon detected or QR scanned</p>
            </div>
            <ArrowRight className="h-6 w-6 text-primary hidden md:block" />
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mb-2 mx-auto">
                3
              </div>
              <p className="text-sm text-muted-foreground">Attendance automatically recorded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;