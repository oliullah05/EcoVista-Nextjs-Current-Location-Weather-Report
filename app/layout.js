import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecovista Location Infomation App",
  description: "Discover the world with Ecovista Location Information App! Created with innovation by Next App, our platform offers comprehensive insights into diverse locales, empowering users with rich data to explore and appreciate our planet's wonders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
