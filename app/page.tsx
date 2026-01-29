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

const Setup = () => {
  const steps = [
    {
      title: "התקנה",
      icon: "📦",
      commands: ["git clone <repo-url>", "cd hightechstarter-template", "npm install"],
    },
    {
      title: "הגדרת סביבה",
      icon: "⚙️",
      commands: ["cp .example.env .env"],
      note: "ערכו את .env עם המפתחות שלכם",
    },
    {
      title: "מסד נתונים",
      icon: "🗄️",
      commands: ["npm run db:generate", "npm run db:push", "npm run db:seed"],
      note: "seed אופציונלי",
    },
    {
      title: "הפעלה",
      icon: "🚀",
      commands: ["npm run dev"],
      note: "localhost:3000",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">התחלה מהירה</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ארבעה צעדים פשוטים להתחיל לעבוד
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-lg">
                    {step.icon}
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 dir="rtl" className="font-bold text-lg mb-4 text-right">
                  {step.title}
                </h3>
                <div dir="ltr" className="bg-muted/50 rounded-lg p-4 text-sm font-mono text-foreground space-y-2 border border-border/50">
                  {step.commands.map((cmd, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-primary/60 select-none">$</span>
                      <code className="text-xs md:text-sm break-all">{cmd}</code>
                    </div>
                  ))}
                </div>
                {step.note && (
                  <p dir="rtl" className="text-xs text-muted-foreground mt-3 text-right">
                    {step.note}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
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
      <Setup />
    </div>
  );
}
