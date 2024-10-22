import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 shadow-2xl bg-black h-20">
      <div>
        <Image
          src={"/images/sabe_shaikh-removebg-preview (1).png"}
          alt=""
          width={150}
          height={150}
        />
      </div>

      <div className="flex gap-4 text-white">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Services</div>
        <div className="cursor-pointer">Contact us</div>
      </div>
    </div>
  );
};

export default Header;
