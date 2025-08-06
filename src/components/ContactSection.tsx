import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Building } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform attendance tracking at your university? Contact us to learn more.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-primary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Company</p>
                      <p className="text-muted-foreground">TallyCheck Ltd</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:caesar@tallycheck.co.ke" className="text-primary hover:underline">
                        caesar@tallycheck.co.ke
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+254791578882" className="text-primary hover:underline">
                        +254 791 578 882
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* CTA Card */}
            <Card className="border-primary/10 bg-gradient-subtle">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  TallyCheck is currently in development. Join our waitlist to be notified when we launch and get early access to the platform.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full shadow-glow">
                    Join Waitlist
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-primary/20 hover:bg-brand-light">
                    Request Demo
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-brand-light rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Built for Kenyan universities with local context in mind
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;