import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecovista Location Infomation App",
  description: "Discover the world with Ecovista Location Information App! Created with innovation by Next App, our platform offers comprehensive insights into diverse locales, empowering users with rich data to explore and appreciate our planet's wonders",
};


export default function LocationLayout({ children, aqi, weather, wind, temperature }) {
  return (
    <section className="wrapper">
      <div class="overlay"></div>
      <Image src="/background.png" class="bg-img" alt="image" width={700} height={1200} />
      <main class="!z-50 w-full">
        <div class="container">
          <div
            class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20"
          >
            <div >{children}</div>
            <div >{weather}</div>
            <div>{aqi}</div>
            <div>{wind}</div>
            <div>{temperature}</div>
          </div>
        </div>
      </main>
    </section>



  );
}