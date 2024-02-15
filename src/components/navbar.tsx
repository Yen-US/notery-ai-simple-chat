import HelpButton from "./help-mk-button";
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { ModelToggle, ModelToggleProps } from "@/components/model-toggle";

// TODO: Add GPT model toggle button from 3.5 to 4
export default function NavBar({model, setModel} : ModelToggleProps) {

    return (
        <nav className="flex items-center justify-around p-6">
            <div className="flex items-center gap-2">
            <h1 className="text-xl">Notery</h1>
            <Badge variant="outline"> simple chat </Badge>
            <Badge variant="outline"> v1.0 </Badge>
            </div>
            <div className="flex align-center gap-2"><ModeToggle /> 
            <ModelToggle model={model} setModel={setModel} />
            <HelpButton />
            </div>
        </nav>
    );
}
