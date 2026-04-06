import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.</p>
        <div className="flex gap-6">
          <Link href={siteConfig.contact.github} target="_blank" className="hover:text-neutral-900 dark:hover:text-white transition-colors">GitHub</Link>
          <Link href={siteConfig.contact.linkedin} target="_blank" className="hover:text-neutral-900 dark:hover:text-white transition-colors">LinkedIn</Link>
          <Link href={`mailto:${siteConfig.contact.email}`} className="hover:text-neutral-900 dark:hover:text-white transition-colors">Email</Link>
        </div>
      </div>
    </footer>
  );
}
