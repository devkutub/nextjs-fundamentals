import Link from "next/link";
import { FunctionComponent } from "react";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <nav className="bg-slate-200 p-4">
            <Link href="/" className="mr-8">Next.Js</Link>
            <Link href="/users" className="mr-4">users</Link>
            <Link href="/admin">Admins</Link>
        </nav>
    );
}
 
export default Navbar;