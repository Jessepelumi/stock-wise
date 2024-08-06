import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StockWise | Get Started",
};

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center gap-36 lg:gap-0 lg:justify-around p-24 font-spaceGrotesk">
      <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started here |&nbsp;
          <code className="font-mono font-bold">Get Started</code>
        </p>
        <div className="fixed bottom-10 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <p className="pr-5">Built by</p>
          <h2 className="text-2xl">JEOLAD</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3 place-items-center">
        <h1 className="text-6xl lg:text-8xl">StockWise</h1>
        <p className="w-80 text-center">
          Eliminate Unpleasant Surprises. Plan and Mange your Pantry Efficiently
        </p>
      </div>

      <Link href="/login">
        <div className="cursor-pointer mt-3 px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none">
          Get Started
        </div>
      </Link>
    </main>
  );
}
