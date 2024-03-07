'use client'
import HelpButton from "./help-mk-button";
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { ModelToggle, ModelToggleProps } from "@/components/model-toggle";
import UserLoginButton from "@/components/user-login";
import { Session } from "next-auth";
import SupportButton from "@/components/support-button";


export default function NavBar({model, setModel, session, className} : {model: string, setModel?: (model: string) => void, session: Session | null, className: string } ) {

    return (
        <nav className={className}>
            <div className="flex items-center gap-2">
            <h1 className="text-xl">Notery</h1>
            <Badge variant="outline"> simple chat </Badge>
            <Badge variant="outline"> v1.0 </Badge>
            </div>
            <div className="flex align-center gap-2">
            <SupportButton />
            <ModeToggle /> 
            <ModelToggle model={model} setModel={setModel} session={session} />
            <HelpButton />
            <UserLoginButton />
            </div>
        </nav>
    );
}
