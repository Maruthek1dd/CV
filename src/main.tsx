import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import { Proyect } from "./components/Proyect";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-800 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <Education />
        <Technologies />
        <Proyect />
        <About />
        <Skills />
      </div>
    </div>
  </React.StrictMode>
);
