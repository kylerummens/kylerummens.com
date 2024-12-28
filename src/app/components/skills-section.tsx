import { Section } from "./section";

export function SkillsSection() {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-4 print:gap-3 text-sm text-muted-foreground">
        <span>JavaScript/TypeScript</span>
        <span>Node.js</span>
        <span>React</span>
        <span>Next.js</span>
        <span>HTML</span>
        <span>CSS/Sass/Tailwind</span>
        <span>Angular</span>
        <span>SQL</span>
        <span>Postgres</span>
        <span>Redis</span>
        <span>Express</span>
        <span>Linux </span>
        <span>Bash</span>
        <span>Firebase</span>
        <span>Supabase </span>
        <span>Google Cloud </span>
        <span>Docker</span>
        <span>Kubernetes</span>
        <span>Ansible</span>
      </div>
    </Section>
  );
}
