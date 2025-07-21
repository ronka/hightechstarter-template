import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            HighTechStarter
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
            תבנית מוכנה לוייב קודינג
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            התחל את המסע שלך עם תבנית מוכנה הכוללת Next.js, Supabase ו-Clerk. כל
            מה שאתה צריך כדי לבנות את הפרוייקט הבא שלך בזמן שיא.
          </p>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const technologies = [
    {
      name: "Next.js 15",
      description: "React Framework",
      icon: "⚛️",
    },
    {
      name: "Supabase Ready",
      description: "Backend as a Service",
      icon: "🔥",
    },
    {
      name: "Clerk",
      description: "Authentication",
      icon: "🔐",
    },
    {
      name: "TypeScript",
      description: "Type Safety",
      icon: "📘",
    },
    {
      name: "Tailwind CSS",
      description: "Styling",
      icon: "🎨",
    },
    {
      name: "Drizzle",
      description: "Database ORM",
      icon: "💎",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            סטאק טכנולוגי מתקדם
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            נבחרו בקפידה הטכנולוגיות המתקדמות והאמינות ביותר בשוק
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow-primary/20 transition-all duration-300 hover:-translate-y-2 text-center bg-gradient-accent backdrop-blur-sm border-primary/20"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            + עוד המון תוספות וכלים מתקדמים לפיתוח מהיר ויעיל
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TechStack />
    </div>
  );
}
