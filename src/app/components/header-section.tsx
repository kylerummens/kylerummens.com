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
        I am a product-focused full stack engineer who cares deeply about
        building simple, polished, and reliable experiences. I take ideas from
        rough concept to production and own every part of the journey. I work
        closely with design and product partners, always focusing on what will
        make the experience feel clean and effortless for the user.
      </p>
    </div>
  );
}
