import "./styles/globals.css";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> | 
            <Link href="/about">O nas</Link> | 
            <Link href="/contact">Kontakt</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>(c) 2025 Firma XYZ</footer>
      </body>
    </html>
  );
}
