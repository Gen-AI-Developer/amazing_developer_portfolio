import Hero from "@/components/Hero";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/TextGenerationEffect";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="text-red-500">Safdar Ali Shah Portfolio Underconstruction!</h1>
        <Hero />
      </div>
      <div className="h-screen top-0 left-0 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex justify-center">
          <div className="max-w-[89w] relative my-20 z-10 md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center" >
            <div className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              <h2>Dynamic Web Magic with Next.js</h2>
              <TextGenerateEffect
                className="text-center text-[40px] md:text-3xl lg:text-6xl"
                words={"Transforming concepts into seamless Experiences"}
              />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
