import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Function from "./components/Function";

function App() {
  return (
    <div className="">

      <section className="bg-hero min-h-screen bg-cover">
        <Navbar />
        <Hero />
      </section>

      <section className="bg-white">
        <Function />
      </section>
    </div>
  );
}

export default App;
