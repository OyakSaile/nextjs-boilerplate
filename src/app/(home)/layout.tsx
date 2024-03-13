import { Header } from "@/components/ui/header";


export default function LayoutHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
}
