import Link from "next/link";
import { FunctionComponent } from "react";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <nav className="bg-slate-200 p-4 space-x-4">
            <Link href="/" className="mr-8">Next.Js</Link>
            <Link href="/users">users</Link>
            <Link href="/admin">Admins</Link>
            <Link href="/api/auth/signin">LogIn</Link>
        </nav>
    );
}

export default Navbar;