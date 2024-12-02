import Image from "next/image";
import Agenda from '../components/Agenda'
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
  <div className="bg-slate-300 h-[100vh] w-full">
      <div className="w-full h-20 bg-slate-400 flex justify-center items-center font-semibold text-5xl text-white">Agenda</div>
      <Agenda/>
  </div>
  );
}
