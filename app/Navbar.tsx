'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {
    const { status, data: session } = useSession();

    return (
        <nav className="bg-slate-200 p-4 space-x-4 flex">
            <Link href="/" className="mr-8">Next.Js</Link>
            <Link href="/users">users</Link>
            <Link href="/admin">Admins</Link>
            <div className="flex-grow"></div>
            {status === "authenticated" && <div>{session.user?.name}</div>}
            {status === "unauthenticated" && <Link href="/api/auth/signin">LogIn</Link>}
        </nav>
    );
}

export default Navbar;