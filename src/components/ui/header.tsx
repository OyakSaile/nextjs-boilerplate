"use client";
import { Moon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { useTheme } from "next-themes";

export function Header() {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  };

  return (
    <div className="border p-8 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        Carda<span className="text-primary">PY</span>
      </h1>

      <div className="flex items-center gap-4">
        <Moon onClick={handleToggleTheme} className="w-5 h-5" />
        <Button asChild variant="outline">
          <Link href="/dashboard">Logar</Link>
        </Button>
        <Button>Criar conta</Button>
      </div>
    </div>
  );
}
