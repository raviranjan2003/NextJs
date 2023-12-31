import Link from "next/link";

export default function Meals(){
    return (
        <>
            <main>
                <h1>Meals Page</h1>
                <h2><Link href="/meals/share-1">meals/share-1</Link></h2>
                <h2><Link href="/meals/share-2">meals/share-2</Link></h2>
            </main>
        </>
    )
}