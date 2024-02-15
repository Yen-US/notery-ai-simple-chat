'use client'
import { Button } from "@/components/ui/button"
import { PersonIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function UserLoginButton() {
    const { data: session } = useSession()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {session ? (
                        <Avatar className="h-7 w-7">
                            <AvatarImage src={session.user?.image ?? ''} />
                            <AvatarFallback>{session.user?.name ?? ''}</AvatarFallback>
                        </Avatar>
                    ) : (
                        <PersonIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account:</DropdownMenuLabel>
                {session ? <DropdownMenuLabel>{session?.user?.name?.slice(0,9) + '...' ?? ''}</DropdownMenuLabel>: <DropdownMenuLabel>Not Signed In</DropdownMenuLabel>}
                <DropdownMenuSeparator />
                {session ? <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem> : <DropdownMenuItem onClick={() => signIn()}>Sign In</DropdownMenuItem>}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
