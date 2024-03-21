import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-400 p-4">
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard/analytics">Analytics</Link>
            </li>
            <li>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
