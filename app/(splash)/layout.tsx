import Link from "next/link";
import { ReactNode } from "react";

export default function SplashPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-20 border-b bg-background/80 px-4 backdrop-blur md:px-6 justify-center items-center">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight">
          Hydration Tracker
        </h1>
      </header>
      <main className="flex grow flex-col">{children}</main>
      <footer className="border-t">
        <div className="container py-4 text-sm leading-loose">
          Built with ❤️ at{" "}
          <FooterLink href="https://www.convex.dev/">Convex</FooterLink>.
          Powered by Convex,{" "}
          <FooterLink href="https://nextjs.org/">Next.js</FooterLink> and{" "}
          <FooterLink href="https://ui.shadcn.com/">shadcn/ui</FooterLink>.
        </div>
      </footer>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 hover:no-underline"
      target="_blank"
    >
      {children}
    </Link>
  );
}
