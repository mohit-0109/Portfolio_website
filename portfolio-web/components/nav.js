import { navLinks } from "../../utils/data";
import Link from "next/link";
import './Nav.module.css'
export default function Nav(){
    return(
        <div className="">
            <nav className="flex flex-row justify-between">
                <div className="text-green">"Mohit Nandargi"</div>
                <div className="flex flex-row text-sm text-slate space-x-6">
                {navLinks.map((link, index) => {
                return (
                    <ul>
                    <Link href={link.path}>
                        <li className="hover:text-green" key={index}>{link.name}</li>
                    </Link>
                    </ul>
                );
                })}
                <div className="border-solid border-2 rounded-lg border-green text-green"> Resume</div>
                </div>
                
            </nav>
        </div>
    )
}