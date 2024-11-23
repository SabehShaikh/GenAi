import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex justify-between bg-blue-300 p-4">
      <div className="font*bold text-xl">LOGO</div>

      <ul className="hidden md:flex gap-4 ">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Career</li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Career</li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
