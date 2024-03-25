import { Metadata } from "next";
import { HeaderDashboard } from "../components/Header";


import { useGetAllProducts } from "@/hooks/requests/products/useGetAllProducts";
import { TableProducts } from "./components/Table";
export const metadata: Metadata = {
  title: "Dashboard - Produtos",
  description: "Produtos",
};

export default function Products() {
  const { data } = useGetAllProducts();

  return (
    <main className="h-full w-full flex flex-col p-8">
      <HeaderDashboard
        title="Produtos"
        description="Veja aqui todos os produtos da sua loja"
      />

      <TableProducts />
    </main>
  );
}
