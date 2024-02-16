'use client'
import NavBar from "@/components/navbar";
import Note from "@/components/note";
import { Session } from "next-auth";
import { useState } from "react";

export default function NavbarNoteParentComponent({session} : {session: Session | null}) {
    const  [model, setModel] = useState<string>("gpt-3.5-turbo")
  return (
    <div>
      <NavBar model={model} setModel={setModel} session={session} />
      <div className="m-10">
      <Note model={model} session={session}/>
      </div>
      
    </div>
  );
}
