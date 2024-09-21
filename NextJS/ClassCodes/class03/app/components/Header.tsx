import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul className="flex gap-2 bg-orange-800">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
      </ul>
    </div>
  );
}
