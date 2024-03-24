interface HeaderDashboardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function HeaderDashboard({ title, description }: HeaderDashboardProps) {
  return (
    <header>
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="text-lg">{description}</p>}
    </header>
  );
}
