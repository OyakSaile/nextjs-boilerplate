import { Header } from "@/components/ui/header";


export default function LayoutHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen pb-24 flex flex-col">
      <Header />
      {children}
    </div>
  );
}
