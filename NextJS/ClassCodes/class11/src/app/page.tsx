import Link from "next/link";

// Array of objects
const DummyData = [
  {
    id: 1,
    name: "Product 1",
    price: 500,
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
  },
  {
    id: 3,
    name: "Product 3",
    price: 800,
  },
  {
    id: 4,
    name: "Product 4",
    price: 700,
  },
  {
    id: 5,
    name: "Product 5",
    price: 200,
  },
];

type Book = {
  id: number;
  name: string;
};

export default async function Home() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const booksData: Book[] = await response.json();
  console.log("booksData", booksData);

  return (
    <div>
      <h1>Simple books API</h1>
      {/* {DummyData.map((product, itemIndex) => {
        return (
          <div key={itemIndex}>
            <h2>ITEM INDEX: {itemIndex}</h2>
            <h2>PRODUCT NAME: {product.name}</h2>
          </div>
        );
      })} */}

      {booksData.map((book: Book, itemIndex: number) => {
        return (
          <Link href={`/product/${book.id}`}>
            <p>{book.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
