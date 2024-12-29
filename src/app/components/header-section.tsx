import Link from "next/link";
import { EmailButton } from "./email-button";

export function HeaderSection() {
  return (
    <div>
      <h1 className="text-3xl mb-1">Kyle Rummens</h1>
      <h2 className="text-base text-muted-foreground mb-6">
        Senior Software Engineer
      </h2>

      <ul className="flex gap-4 text-sm mb-2 print:hidden">
        <li>
          <Link
            className="link"
            href="https://github.com/kylerummens"
            target="_blank"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            className="link"
            href="https://x.com/KyleRummens"
            target="_blank"
          >
            X
          </Link>
        </li>
        <li>
          <Link
            className="link"
            href="https://linkedin.com/in/kyle-rummens"
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <EmailButton />
        </li>
        <li>
          <Link
            className="link"
            href="/resume.pdf"
            download="Resume - Kyle Rummens.pdf"
            target="_blank"
          >
            Download
          </Link>
        </li>
      </ul>

      <div className="hidden print:block text-xs text-muted-foreground -mt-4 mb-4">
        k.d.rummens@gmail.com | 385.310.6083
      </div>

      <p className="text-muted-foreground text-sm print:text-xs">
        As an experienced software engineer with 10 years in the industry, I
        bring a wealth of knowledge and skills to any development team. Outside
        work, I pursue my love of adventure through rock climbing and
        mountaineering, and I am currently working towards my private pilot
        license. Additionally, my faith is an important part of my life, and I
        actively serve in my church community. I am an enthusiastic learner,
        constantly exploring new topics in software, history, politics, and
        anything else that catches my interest. As a self-taught software
        engineer, I take great pride in my ability to teach myself new skills
        and technologies, and am excited to continue growing and contributing to
        the field.
      </p>
    </div>
  );
}
