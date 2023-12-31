import Link from "next/link";
import classes from './header.module.css';
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./headerBackground";
import NavLink from "./navLink";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" alt="Foodies" className={classes.logo}>
                    <Image src={logoImg} alt="Image" priority /> Tasty Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Food</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}