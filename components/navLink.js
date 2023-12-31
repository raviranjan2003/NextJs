'use client';

import { usePathname } from "next/navigation";
import classes from './navLink.module.css';
import Link from "next/link";

export default function NavLink({href,children}){
    const path = usePathname();
    return (
        <Link 
            href={href} 
            className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
        >
            {children}
        </Link>
    )
}