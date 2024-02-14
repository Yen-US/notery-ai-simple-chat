import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Note from "@/components/note";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-between font-mono">
      <NavBar/>
      <Note/>
      <Footer/>
    </main>
  );
}
