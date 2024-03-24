import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Button } from "./button";
import { CreditCard, Home, Settings2, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}
export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      {...props}
      className={cn(
        "max-w-[200px] grid grid-cols-1 justify-center gap-8 p-4 border-r border min-h-full",
        className
      )}
    >
      <ul className="flex flex-col gap-4 items-center">
        <li className="w-full">
          <Button className="w-full" variant="outline" asChild>
            <Link href="/dashboard" className="flex gap-2 items-center">
              <Home className="w-4 h-4" />
              Home
            </Link>
          </Button>
        </li>
        <li className="w-full">
          <Button className="w-full" variant="outline" asChild>
            <Link href="dashboard/products" className="flex gap-2 items-center">
              <ShoppingBag className="w-4 h-4" />
              Produtos
            </Link>
          </Button>
        </li>
        <li className="w-full">
          <Button className="w-full" variant="outline" asChild>
            <Link href="/dashboard" className="flex gap-2 items-center">
              <Settings2 className="w-4 h-4" />
              Settings
            </Link>
          </Button>
        </li>

        <li className="w-full">
          <Button className="w-full" variant="outline" asChild>
            <Link href="/dashboard" className="flex gap-2 items-center">
              <CreditCard className="w-4 h-4" />
              Payments
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
