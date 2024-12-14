import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  const query = `*[_type == "homepage"] {
    heading,
    paragraph,
    buttonText,
    "imageUrl": image.asset->url
  }`;

  const sanityData = await client.fetch(query);
  const homepage = sanityData[0];

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl mb-4">{homepage.heading}</h1>
      <p className="text-lg mb-4">{homepage.paragraph}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {homepage.buttonText}
      </button>

      {/* if homepage.imageUrl is available. */}
      {homepage.imageUrl && (
        <Image
          src={homepage.imageUrl}
          alt="Homepage"
          width={300}
          height={250}
          className="mt-4 rounded shadow-lg"
        />
      )}
    </div>
  );
}
