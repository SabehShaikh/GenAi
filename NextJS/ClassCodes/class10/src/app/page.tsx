import InfoCard from "@/components/InfoCard";

export default async function Home() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const booksData = await response.json();
  console.log("booksData", booksData);

  // for (let i = 0; i < booksData.length; i++) {
  //   console.log("name =", booksData[i].name);
  // }

  const mappedBooks = booksData.map((item: any) => item.name);
  console.log("BOOKS NAME MAP:", mappedBooks);

  return (
    <div>
      <InfoCard name="Sir Bilal" classDay="Saturday" role="Teacher" />
      <InfoCard name="Sir Ali Aftab" classDay="Saturday" role="Teacher" />
      <InfoCard name="Sabeh Shaikh" classDay="Saturday" role="Student" />
    </div>
  );
}
