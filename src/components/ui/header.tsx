import { Moon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export function Header() {
  return (
    <div className="border p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        Anot<span className="text-red-400">Y</span>
      </h1>

      <div className="flex items-center gap-4">
        <Moon className="w-5 h-5" />
        <Button asChild variant="outline">
          <Link href="/dashboard">Logar</Link>
        </Button>
        <Button>Criar conta</Button>
      </div>
    </div>
  );
}
