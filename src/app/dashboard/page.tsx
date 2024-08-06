import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Login() {
  return (
    <main className="flex flex-col items-center py-14 lg:px-24 lg:pt-24 lg:pb-12 gap-14 font-spaceGrotesk">
      <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          StockWise |&nbsp;
          <code className="font-mono font-bold">Dashboard</code>
        </p>
        <div className="fixed bottom-10 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <p className="pr-5">Built by</p>
          <h2 className="text-xl lg:text-2xl">JEOLAD</h2>
        </div>
      </div>
    </main>
  );
}
