import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
