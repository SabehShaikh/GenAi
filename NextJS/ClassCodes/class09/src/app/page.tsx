import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen">
      <div>
        <p className="text-blue-800">Hello World</p>
        <div className="w-28 flex flex-col gap-y-1">
          <button>Simple Button</button>

          <Button>Shadcn Button</Button>
          <Button variant="destructive">Shadcn Button</Button>
        </div>
      </div>
    </div>
  );
}
