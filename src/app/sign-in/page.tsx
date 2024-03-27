import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - Cardapy",
  description: "App de anotações",
};

export default function SignInPage() {
  return (
    <div className="h-screen justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="relative h-full hidden lg:flex">
        <Image objectFit="cover" src="/shop.jpg" alt="aeiokfoeiak" fill />
      </div>
      <div className="p-4">
        <form className="space-y-4 max-w-lg w-full">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">
              Carda<span className="text-primary">PY</span>
            </h1>
            <h2 className="text-3xl">Olá novamente</h2>
            <p className="text-sm text-muted-foreground">
              preencha seu e-mail e senha para continuar entrar em sua conta.
            </p>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Digite o seu e-mail" />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input type="password" placeholder="Digite a sua senha" />
          </div>

          <div>
            <Label htmlFor="password">Senha</Label>
            <Input type="password" placeholder="Digite a sua senha" />
          </div>

          <div>
            <Link className="text-primary" href="/">
              Esqueceu sua senha?
            </Link>
          </div>
          <div>
            <Button className="w-full">Entrar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
