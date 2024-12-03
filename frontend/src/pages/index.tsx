import Image from "next/image";
import Agenda from '../components/Agenda'
import Listatodo from '../components/Listatodo'
import localFont from "next/font/local";
import Link from './'

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
  <div className="bg-slate-300 h-[100vh] flex justify-center items-center w-full">
      <div className="bg-white w-3/12 flex flex-col justify-center items-center h-[500px]">
          <div className="flex flex-col">
            <label htmlFor="">Usuario</label>
            <input className="border" type="text" />
          </div>
          <div className=" mt-10 flex flex-col">
            <label htmlFor="">Senha</label>
            <input className="border h-8" type="password" name="" id="" />
          </div>
          <Link href="/Afazeres" className="mt-20 bg-purple-300 w-40 flex justify-center items-center h-10 rounded-full hover:bg-purple-400"><a href=""></a></Link>
      </div>
  </div>
  );
}
