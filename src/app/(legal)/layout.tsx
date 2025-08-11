export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-3xl dark:prose-invert">
          {children}
        </div>
      </main>
    </div>
  );
}
