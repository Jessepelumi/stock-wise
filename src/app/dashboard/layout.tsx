export default function DashboardLayout({
  children,
  pantry,
  add_pantry,
}: Readonly<{
  children: React.ReactNode;
  pantry: React.ReactNode;
  add_pantry: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen py-24 lg:p-24">
        <div className="text-white">{children}</div>
        <section className="lg:flex gap-5 lg:items-top px-7 lg:px-40">
          <aside className="h-auto lg:h-72 mb-4 lg:mb-0 flex-grow-0 flex-shrink-0 basis-2/5 overflow-scroll border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4">{add_pantry}</aside>
          <aside className="h-80 lg:h-96 flex-grow-0 flex-shrink-0 basis-3/5 overflow-scroll border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4">{pantry}</aside>
        </section>
      </body>
    </html>
  );
}
