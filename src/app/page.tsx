"use client";
import Topheader from "@/components/topheader";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Editorspics from "@/components/editors-pics";
import Footer from "@/components/footer";
import Greensec from "@/components/green-sec";
import Universal from "@/components/universal";
import Featured from "@/components/featured";
import Products from "@/components/products";

export default function Home() {
  return (
    <div className="wrapper1">

      <Topheader />
      <Header /> 
      <Hero />
      <Editorspics />
      <Products />
      <Greensec />
      <Universal />
      <Featured />
      <Footer />
   
    </div>
  );
}
