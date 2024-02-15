'use client'
import NavBar from "@/components/navbar";
import Note from "@/components/note";

import { useState } from "react";

export default function NavbarNoteParentComponent() {
    const  [model, setModel] = useState<string>("gpt-3.5-turbo")
  return (
    <div>
      <NavBar model={model} setModel={setModel} />
      <div className="m-10">
      <Note model={model}/>
      </div>
      
    </div>
  );
}
