import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/ui/sidebar";

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-2 h-full">
        <Sidebar  />
        {children}
      </div>
    </div>
  );
}
