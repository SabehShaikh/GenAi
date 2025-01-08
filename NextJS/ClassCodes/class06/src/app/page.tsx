import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-white text-black h-screen flex items-center">
      <div className="flex flex-col gap-6 justify-center px-16 w-1/2 h-48">
        <h1 className="font-bold text-4xl lg:text-[44px]">
          Welcome To Our Website
        </h1>
        <p className="font-normal text-[24px] lg:text-[32px] leading-9">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <button className="text-white w-[237px] h-[66px] p-4 bg-black">
          Contact US
        </button>
      </div>

      <div className="w-1/2 flex justify-center ">
        <Image
          className="w-[502px] h-[465px]"
          src={"/images/bg-image.jfif"}
          alt="image"
          width={502}
          height={465}
        />
      </div>
    </div>
  );
}
