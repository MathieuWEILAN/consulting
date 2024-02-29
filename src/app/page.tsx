import Image from "next/image";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between w-full mt-[100px]"></main>
      <Footer />
    </>
  );
}
