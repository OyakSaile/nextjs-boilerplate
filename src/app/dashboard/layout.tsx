import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/ui/sidebar";

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className="grid w-full grid-cols-[200px_1fr] h-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
