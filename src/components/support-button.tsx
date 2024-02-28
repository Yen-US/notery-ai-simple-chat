'use client'
import { Button } from "@/components/ui/button"
import { CookieIcon } from "@radix-ui/react-icons"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export default function SupportButton() {
    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => openInNewTab('https://www.paypal.com/paypalme/yenuscr')}>
                        <CookieIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Buy me a cookie!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
