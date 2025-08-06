import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About TallyCheck</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TallyCheck is an attendance automation platform designed for universities. It simplifies how students check into class using Bluetooth beacons or QR codes, helping lecturers save time and institutions get accurate records.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/10 hover:shadow-elegant transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">University-Focused</h3>
                <p className="text-muted-foreground">
                  Built specifically for higher education institutions with complex scheduling and attendance requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10 hover:shadow-elegant transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Multi-Role Platform</h3>
                <p className="text-muted-foreground">
                  Designed for students, lecturers, administrators, and system admins with role-based access control.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10 hover:shadow-elegant transition-smooth group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Kenya-Ready</h3>
                <p className="text-muted-foreground">
                  Designed with local context in mind—flexible, mobile-first, and affordable for Kenyan universities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;