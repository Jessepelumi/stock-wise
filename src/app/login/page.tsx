import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - Signup",
};

export default function Login() {
  return (
    <main className="flex h-screen flex-col items-center gap-14 py-24 lg:p-24  font-spaceGrotesk">
      <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          StockWise |&nbsp;
          <code className="font-mono font-bold">Login - Signup</code>
        </p>
        <div className="fixed bottom-10 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <p className="pr-5">Built by</p>
          <h2 className="text-xl lg:text-2xl">JEOLAD</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3 place-items-center">
        <h1 className="text-6xl lg:text-8xl text-center">Hello, StockWiser</h1>
        <p className="w-80 lg:w-96 text-center">
        Please log in with your Google account, as a returning user or a first time user.
        </p>
      </div>

      <Link href="/dashboard">
        <div className="flex gap-2 items-center cursor-pointer mt-3 px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none">
          <img src="/images/google.png" alt="" className="w-4 h-4" />
          Continue with Google
        </div>
      </Link>
    </main>
  );
}
