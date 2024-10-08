"use client"

import Link from "next/link"
import Logo from '@/public/Logo.png'
import { Typewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import ButtonsProvider from "./components/ButtonsProvider";

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image
        width={100}
        height={100}
        src={Logo}
        alt=""
        className="mb-4 object-contain"
      />
      <h1 className="text-4xl md:text-5xl font-black mb-2 text-center">
        <Typewriter typeSpeed={20} words={["En cours,", "Au boulot,","A la maison...", "Ne perdez plus jamais vos notes avec SaaS Notes !"]} loop={0}/>
        <span><Cursor/></span>
      </h1>
      <ButtonsProvider/>
      <h2 className="text-sm p-5 font-medium lg:text-lg">Customized by @LRnZ'Dev</h2>

    </section>
  );
}
