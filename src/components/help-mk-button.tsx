'use client'
import { Button } from "@/components/ui/button"
import { QuestionMarkIcon } from "@radix-ui/react-icons"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function HelpButton() {
    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => openInNewTab('https://www.markdownguide.org/basic-syntax/')}>
                        <QuestionMarkIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>You can use markdown!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
