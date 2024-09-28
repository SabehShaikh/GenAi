import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul className="flex gap-2 bg-red-500">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
