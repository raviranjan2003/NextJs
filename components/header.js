import Link from "next/link";
import classes from './header.module.css';
import Image from "next/image";

import logoImg from "@/assets/logo.png";

export default function MainHeader(){
    return (
        <header className={classes.header}>
            <Link href="/" alt="Foodies" className={classes.logo}>
                <Image src={logoImg} alt="Image" priority /> Tasty Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}