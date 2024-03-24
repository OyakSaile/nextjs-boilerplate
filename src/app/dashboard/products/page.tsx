import { Metadata } from "next";
import { HeaderDashboard } from "../components/Header";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
import { ModalAlert } from "@/components/ui/modal-alert";
import { useGetAllProducts } from "@/hooks/requests/products/useGetAllProducts";
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

      <div className="mt-4 border p-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Pizzas</h2>
          <ModalAlert
            titleButton="Deletar Categoria"
            title="Deletar Pizza?"
            description="Deseja realmente deleltar esta categoria? essa ação é irreversível."
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow className="uppercase">
              <TableHead></TableHead>
              <TableHead>Nome do produto</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Pizza</TableCell>
              <TableCell>50</TableCell>
              <TableCell>
                <div className="space-y-2">
                  <Label className="block">Publicado</Label>
                  <Switch />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Edit className="w-6 h-6" />
                  <Trash className="w-6 h-6 text-red-300" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
