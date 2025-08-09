import Header from "@/components/header/Header";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function mainLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      
    </div>
  );
}
