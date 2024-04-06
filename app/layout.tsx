import Link from "next/link";
import "./global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
