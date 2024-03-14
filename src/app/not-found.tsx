import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="text-center space-y-4 p-3">
        <p className="text-9xl font-bold">404</p>
        <p className="text-muted-foreground">
          Não conseguimos encontrar a página solicitada
        </p>
        <Button asChild variant="default">
          <Link href="/">Voltar a página inicial</Link>
        </Button>
      </div>
    </div>
  );
}
