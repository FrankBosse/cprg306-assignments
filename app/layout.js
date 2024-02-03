import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CPRG-306 Assignments",
  description: "Frank Bosse's CPRG-306 Assignments",
};

//  className="bg-[linear-gradient(theme(colors.blue.500),theme(colors.green.500),theme(colors.red.500),theme(colors.yellow.500))] bg-fixed"

export default function RootLayout({ children }) {
  return (
    <html
      className="bg-[linear-gradient(theme(colors.blue.500),theme(colors.blue.400),theme(colors.blue.300),theme(colors.yellow.100),theme(colors.blue.800),theme(colors.blue.800),theme(colors.blue.700),theme(colors.blue.600),theme(colors.blue.500))] bg-fixed"
      lang="en"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
