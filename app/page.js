import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <h3><Link href="/meals">Meals</Link></h3>
      <h3><Link href="/meals/share">Meals/share</Link></h3>
      <h3><Link href="/community">Community</Link></h3>
    </main>
  );
}
