import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold bg-gradient-to-tr from-green-900 to-zinc-900 bg-clip-text text-transparent text-shadow-lg">Kwenta</h1>
      <h5 className="mb-16">Start Your Financial Journey With Us</h5>
      <Link href="/login" className="bg-gradient-to-tr from-green-900 to-zinc-900 rounded-xl py-2 px-4 text-white shadow-xl">Get Started Now</Link>
    </div>
  );
}