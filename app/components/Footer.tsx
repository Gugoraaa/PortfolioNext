import Link from "next/link";

const links = [
  { label: "Email", href: "mailto:gugora.dev@gmail.com" },
  { label: "CV", href: "/CV.pdf" },
  { label: "GitHub", href: "https://github.com/gugoraaa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gugoradev/" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--card-border)] py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm text-[var(--muted)]">
            Open to backend and full-stack work.{" "}
            <a
              href="mailto:gugora.dev@gmail.com"
              className="rounded-sm text-[var(--text)] underline underline-offset-4 transition-colors hover:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              gugora.dev@gmail.com
            </a>
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                className="rounded-sm text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                {label}
              </Link>
            ))}
          </div>

          <p className="mt-4 text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
