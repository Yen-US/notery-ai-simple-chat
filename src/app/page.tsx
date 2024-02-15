import Footer from "@/components/footer";
import NavbarNoteParentComponent from "@/components/navbar-note";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-between font-mono">
      <NavbarNoteParentComponent/>
      <Footer/>
    </main>
  );
}
