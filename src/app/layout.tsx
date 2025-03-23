import Link from 'next/link';
import './styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body>
        <header>
          <nav>
            <Link href="/">Strona główna</Link> | 
            <Link href="/about">O nas</Link> | 
            <Link href="/contact">Kontakt</Link> | 
            <Link href="/profile">Konto użytkownika</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>(c) 2025 Firma XYZ</footer>
      </body>
    </html>
  );
};

export default Layout;
