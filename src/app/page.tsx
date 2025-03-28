"use client"

import { Description } from "./components/home/Description/Description";
import { Hero } from "./components/home/Hero";
import { MainProducts } from "./components/home/MainProducts";

export default function Home() {
  console.log("Hola mundo");
  return (
      <main>
        <Hero/>
        <Description />
        <MainProducts />
      </main>
    
  );
}
