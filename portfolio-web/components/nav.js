import { navLinks } from "../../utils/data";
import Link from "next/link";
import './Nav.module.css'
export default function Nav(){
    return(
        <div className="">
            <nav className="flex flex-row justify-between">
                <div>"Mohit Nandargi"</div>
                <div className="flex flex-row ">
                {navLinks.map((link, index) => {
                return (
                    <ul>
                    <Link href={link.path}>
                        <li key={index}>{link.name}</li>
                    </Link>
                    </ul>
                );
                })}
                </div>
                
            </nav>
        </div>
    )
}