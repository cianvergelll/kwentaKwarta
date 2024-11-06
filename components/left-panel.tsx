"use client";

import Link from "next/link";
import { signOut } from  "next-auth/react";


export default function LeftPanel() {
    return (
        <nav className="bg-gradient-to-b from-green-900 to-zinc-900 flex flex-col items-center p-8 space-y-6 w-full max-w-xs h-screen rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-2xl">
            {/* Profile Photo and Welcome Message */}
            <div className="flex items-center w-full">
                <img src="images/avatar.jpg" alt="avatar" className="w-12 h-12 rounded-full mr-4 border border-white shadow-2xl"/>
                <div>
                    <p className="text-white text-xs">Welcome back, </p>
                    <p className="text-white text-3xl font-semibold">Jhenesis</p>
                </div>
            </div>

            {/* Date Display */}
            <p className="text-white text-sm">November 6, 2024</p>

            {/* Navigation Buttons */}
            <div className="space-y-2 w-full ">
                <Link href="/expenses" className="block w-full bg-gradient-to-tl from-zinc-900 to-green-700 rounded-xl py-3 px-2 text-white shadow-xl font-medium border border-white text-center hover:opacity-60 hover:text-green-400 transition duration-300"> Expenses</Link>
                <Link href="/expenses" className="block w-full bg-gradient-to-tl from-zinc-900 to-green-700 rounded-xl py-3 px-2 text-white shadow-xl font-medium border border-white text-center hover:opacity-60 hover:text-green-400 transition duration-300">Payments</Link>
                <Link href="/expenses" className="block w-full bg-gradient-to-tl from-zinc-900 to-green-700 rounded-xl py-3 px-2 text-white shadow-xl font-medium border border-white text-center hover:opacity-60 hover:text-green-400 transition duration-300">Saving Goals</Link>
                <Link href="/expenses" className="block w-full bg-gradient-to-tl from-zinc-900 to-green-700 rounded-xl py-3 px-2 text-white shadow-xl font-medium border border-white text-center hover:opacity-60 hover:text-green-400 transition duration-300">Budget Planner</Link>
            </div>

            {/* Settings and Logout Buttons */}
            <div className="mt-auto w-full">
                <Link href="/expenses" className="block font-medium text-white text-center">Settings and Privacy</Link>
                <button
                onClick={() => {}}
                className="block w-full bg-gradient-to-tl from-zinc-900 to-green-700 rounded-xl py-3 px-2 text-white shadow-xl font-medium border border-white text-center mt-[100px] hover:opacity-60 hover:text-green-400 transition duration-300"
                >Log out</button>
            </div>

        </nav>

    );
}