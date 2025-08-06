import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Smartphone, Shield } from "lucide-react";

const TechStackSection = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: Smartphone,
      items: ["React Native (Expo)", "Expo Router", "Zustand"]
    },
    {
      category: "Backend",
      icon: Database,
      items: ["Supabase", "PostgreSQL", "Realtime"]
    },
    {
      category: "Mobile",
      icon: Code2,
      items: ["React Native Bluetooth", "Native Navigation", "Push Notifications"]
    },
    {
      category: "Security",
      icon: Shield,
      items: ["Supabase Auth", "Device Binding", "Encrypted Data"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on modern, reliable technologies for scalability and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card key={index} className="border-primary/10 hover:shadow-elegant transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;