import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <p className="text-sm hover:text-gray-600 ">
              <Link href="/CV.pdf" target="_blank">
                CV
              </Link>
            </p>
            <p className="text-sm hover:text-gray-600 ">
              <Link href="https://github.com/gugoraaa" target="_blank">
                GitHub
              </Link>
            </p>
            <p className="text-sm hover:text-gray-600 ">
              <Link
                href="https://www.linkedin.com/in/gugoradev/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </p>
          </div>
          <p className="mt-4 text-xs ">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
