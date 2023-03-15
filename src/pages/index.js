import { Todolist } from "@/components/Todolist";
import Link from "next/link";
import { PersonContext } from "@/components/PersonContext";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [name, setName] = useState("JOE DOE");
  return (
    <div className="container">
      <Link href="/contact">Contact</Link>
      <Link href="/about">About US</Link>
      <Link href="/post">POST</Link>
      
      <PersonContext.Provider value={{name, setName}}>
      <Footer />
      </PersonContext.Provider>

      <Todolist />
    </div>
  );
}
