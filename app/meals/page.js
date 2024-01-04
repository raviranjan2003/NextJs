import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/mealsGrid";
export default function Meals(){
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created 
                    <span className={classes.highlight}> by Ravi</span>
                </h1>
                <p>
                    Choose your favourite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your Favourite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    )
}