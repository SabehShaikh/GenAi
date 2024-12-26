import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const query = `*[_type == "homepage"] {
    heading,
    paragraph,
    buttonText,
    image,
  }`;

  // "imageUrl": image.asset->url

  const sanityData = await client.fetch(query);
  const homepage = sanityData[0];

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl mb-4">{homepage.heading}</h1>

      <Image
        src={urlFor(homepage.image).url()}
        alt=""
        width={300}
        height={300}
      />

      <p className="text-lg mb-4">{homepage.paragraph}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {homepage.buttonText}
      </button>
    </div>
  );
}
