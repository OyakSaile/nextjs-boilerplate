import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Anoty",
  description: "App de anotações",
};

export default function Dashboard() {
  return (
    <main className="h-full w-full flex flex-col p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-lg">Bem-vindo ao dashboard</p>
    </main>
  );
}
