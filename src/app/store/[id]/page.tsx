import Image from "next/image";
import { Header } from "./components/Header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Cardapy - McDonalds",
  description: "App de anotações",
};

export default function StorePage() {
  return (
    <div className="min-h-screen w-full ">
      <Header />
      <div className="relative h-[500px]">
        <Image objectFit="cover" alt="Imagem" fill src="/shoptst.jpg" />
      </div>

      <div className="grid grid-cols-[1fr_400px] container mx-auto mt-4">
        <div>
          <div>
            <h2 className="text-3xl font-semibold">McDonalds</h2>
            <p>Taxa de entrega: R$12,00</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">O que tem de novo?</h2>
          </div>
        </div>

        <Card className="shadow -mt-60 z-50 p-2 rounded-md">
          <CardHeader>
            <h2 className="text-xl text-muted-foreground">McDonalds</h2>
            <p className="text-muted-foreground">Itens: 2</p>
            <Separator className="my-2" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between my-8 items-start">
              <div className="flex gap-2 items-start">
                <span className="bg-slate-400/20 text-md px-4 rounded h-max">
                  1
                </span>
                <div>
                  <h2>Cheddar 2 Carnes</h2>
                  <p>Sem cebola, sem picles</p>
                  <div className="flex gap-2 items-center mt-2">
                    <p className="font-semibold text-xs">R$ 20,00</p>
                    <span className="text-primary cursor-pointer text-xs">
                      Editar
                    </span>
                  </div>
                </div>
              </div>
              <Trash />
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">Total</p>
              <p>R$ 50,00</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">Subtotal</p>
              <p>R$ 50,00</p>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full">ir para checkout</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
