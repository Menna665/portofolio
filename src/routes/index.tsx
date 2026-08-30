import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Cpu,
  Database,
  Bot,
  Car,
  Award,
  Users,
  Code2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const TITLE = "Menna Amr — Computer Science Student & Data Engineering";
const DESCRIPTION =
  "Portfolio of Menna Amr Mohamed, an AI & Computer Science student in Mansoura, Egypt, focused on data engineering, artificial intelligence and robotics projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const projects = [
  {
    icon: Database,
    title: "Banking System Application",
    stack: ["C#", "Windows Forms", "OOP"],
    points: [
      "Developed a banking application using C# and Windows Forms.",
      "Applied object-oriented programming concepts to implement the core functionality.",
    ],
  },
  {
    icon: Car,
    title: "Smart RC Car with Robotic Arm",
    stack: ["Arduino", "Bluetooth", "Robotics"],
    points: [
      "Built a Bluetooth-controlled smart car integrated with a robotic arm.",
      "Applied programming and robotics concepts to control movement and hardware.",
    ],
  },
  {
    icon: Code2,
    title: "Transportation Management System",
    stack: ["Python", "Data Structures"],
    points: [
      "Developed a transportation management application using Python.",
      "Used data structures to organize and manage transportation-related data.",
    ],
  },
  {
    icon: Bot,
    title: "Smart Robot",
    stack: ["ESP32", "PID Control", "Sensors"],
    points: [
      "Developed a smart robotic system using ESP32, a motion sensor and PID control.",
      "Implemented sensor-based control to improve movement and response.",
    ],
  },
];

const skillGroups = [
  { label: "Programming", items: ["Python", "C++", "C#", "SQL"] },
  {
    label: "Technical",
    items: [
      "Data Structures",
      "Data Science",
      "OOP",
      "Robotics",
      "Database Fundamentals",
    ],
  },
  {
    label: "Tools & Technologies",
    items: [
      "Arduino",
      "ESP32",
      "Blynk",
      "Windows Forms",
      "Visual Studio",
      "VS Code",
      "Git",
      "GitHub",
    ],
  },
  { label: "Languages", items: ["Arabic", "English", "French"] },
  {
    label: "Soft Skills",
    items: ["Teamwork", "Communication", "Adaptability", "Problem Solving"],
  },
];

const involvement = [
  {
    icon: Users,
    title: "Microsoft Student Club — NMU",
    role: "Artificial Intelligence Committee Member",
    meta: "2026 · Mansoura, Egypt",
    text: "Contributed to student-focused technical activities and learning initiatives within the AI committee.",
  },
  {
    icon: Award,
    title: "Egyptian Collegiate Programming Contest (ECPC)",
    role: "Participant",
    meta: "2026 · Egypt",
    text: "Practiced competitive programming, algorithmic problem-solving and teamwork.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-sm font-bold tracking-widest uppercase">
            Menna Amr
          </span>
          <div className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#projects" className="transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-primary">
              Skills
            </a>
            <a href="#education" className="transition-colors hover:text-primary">
              Education
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="py-20 sm:py-28">
          <p className="text-sm font-medium tracking-[0.25em] text-primary uppercase">
            Computer Science · Data Engineering
          </p>
          <h1 className="mt-5 text-5xl leading-[1.05] font-bold sm:text-7xl">
            Menna Amr <span className="text-gradient">Mohamed</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Computer Science student with a strong interest in Data Engineering,
            Artificial Intelligence and software development. Hands-on experience
            through academic and personal projects across programming, databases,
            algorithms, data science and robotics.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            Mansoura, Egypt
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={cn(buttonVariants({ size: "lg" }), "glow")}
            >
              View projects
            </a>
            <a
              href="mailto:mennaamrmohammed662005@gmail.com"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Get in touch
            </a>
          </div>

        </section>

        <section id="projects" className="py-16">
          <SectionHeading eyebrow="Selected work" title="Projects" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="surface-card group p-6 transition-transform hover:-translate-y-1"
              >
                <project.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <SectionHeading eyebrow="Toolbox" title="Skills" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="surface-card p-6">
                <h3 className="text-sm font-semibold tracking-widest text-primary uppercase">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-16">
          <SectionHeading eyebrow="Background" title="Education & Certifications" />
          <div className="mt-10 grid gap-6">
            <div className="surface-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex gap-3">
                  <GraduationCap className="mt-1 size-5 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">New Mansoura University</h3>
                    <p className="text-muted-foreground">
                      B.Sc. in Artificial Intelligence — Mansoura, Egypt
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">Sep 2024 – Jun 2028</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Relevant coursework: Artificial Intelligence, Data Structures,
                Object-Oriented Programming, Databases.
              </p>
            </div>
            <div className="surface-card flex gap-3 p-6">
              <Cpu className="mt-1 size-5 text-accent" />
              <div>
                <h3 className="text-lg font-semibold">
                  Data Science &amp; Machine Learning Certification
                </h3>
                <p className="text-muted-foreground">Creativa Innovation Hub</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <SectionHeading eyebrow="Beyond class" title="Volunteering & Competitions" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {involvement.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <item.icon className="size-5 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-primary">{item.role}</p>
                <p className="text-xs text-muted-foreground">{item.meta}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 pb-28">
          <SectionHeading eyebrow="Say hello" title="Contact" />
          <div className="surface-card mt-10 grid gap-4 p-8 sm:grid-cols-2">
            <ContactLink
              icon={Mail}
              label="mennaamrmohammed662005@gmail.com"
              href="mailto:mennaamrmohammed662005@gmail.com"
            />
            <ContactLink icon={Phone} label="01010438408" href="tel:+201010438408" />
            <ContactLink
              icon={Linkedin}
              label="linkedin.com/in/menna-amr-2339a2327"
              href="https://www.linkedin.com/in/menna-amr-2339a2327/"
            />
            <ContactLink
              icon={Github}
              label="github.com/Menna665"
              href="https://github.com/Menna665"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Menna Amr Mohamed
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Mail;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onClick={(event) => {
        // Only intercept when embedded in the preview iframe: the sandbox
        // can silently block target="_blank" popups. Open a new tab by hand
        // (window.open returns null when the popup is blocked) and fall back
        // to navigating the current frame so the link always does something.
        // In a top-level window the native anchor behavior is fine.
        if (window.top === window.self) return;
        event.preventDefault();
        const opened = window.open(href, "_blank");
        if (opened) {
          opened.opener = null;
        } else {
          window.location.assign(href);
        }
      }}
      className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="size-4 text-primary" />
      <span className="truncate">{label}</span>
    </a>
  );
}
