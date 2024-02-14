import HelpButton from "./help-mk-button";

import { ModeToggle } from "@/components/mode-toggle"

// TODO: Add GPT model toggle button from 3.5 to 4
// TODO: Add GPTchat badge near the title
export default function NavBar() {

    return (
        <nav className="flex items-center justify-around p-6">
            <h1 className="text-xl">Notery</h1>
            <div className="flex align-center gap-2"><ModeToggle /> 
            <HelpButton />
            </div>
        </nav>
    );
}
