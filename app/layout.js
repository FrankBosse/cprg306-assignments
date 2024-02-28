import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CPRG-306 Assignments",
  description: "Frank Bosse's CPRG-306 Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html
      className="bg-gradient-radial from-slate-950 to-slate-900 bg-fixed"
      lang="en"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
