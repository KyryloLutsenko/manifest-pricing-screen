export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
}
