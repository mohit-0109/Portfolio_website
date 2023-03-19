import { navLinks } from "../../utils/data";
import Link from "next/link";
import './Nav.module.css'
export default function Nav(){
    return(
        <div>
            <nav className="flex">
                {navLinks.map((link, index) => {
                return (
                    <ul>
                    <Link href={link.path}>
                        <li key={index}>{link.name}</li>
                    </Link>
                    </ul>
                );
                })}
            </nav>
        </div>
    )
}