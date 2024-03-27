"use client";
import { MapPin, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

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
    <header className="py-8 container mx-auto flex  justify-between">
      <div>
        <div className="flex items-center gap-2">
          <MapPin />
          <h2 className="font-semibold">Rio de Janeiro</h2>
        </div>
      </div>
      <div>
        <Moon onClick={handleToggleTheme} className="w-5 h-5 cursor-pointer" />
      </div>

      <div>
        <Link href="/" className="text-2xl font-semibold">
          Carda<span className="text-primary">PY</span>
        </Link>
      </div>
    </header>
  );
}
