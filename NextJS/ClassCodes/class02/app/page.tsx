import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul className="flex gap-4 bg-orange-800">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact-us</Link>
        </li>
      </ul>

      <h1>Home Page</h1>
    </div>
  );
}
