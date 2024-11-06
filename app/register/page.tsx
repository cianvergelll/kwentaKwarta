"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <div className="h-screen flex overflow-hidden">
            {/*Left- Container*/}
            <div className= "h-full flex flex-col w-[50%] bg-gradient-to-br from-[#018053] to-[#001a10] justify-center items-center rounded-tl-xl rounded-bl-xl transition-transform duration-500">
            <form className="flex flex-col w-[50%]">
                <input type="text" placeholder="Username" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                <input type="email" placeholder="Email" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                <input type="password" placeholder="Password" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                <input type="password" placeholder="Confirm Password" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                <Link className="bg-white py-3 rounded-full block text-center hover:bg-[#018053] hover:text-white transition-all duration-500" href="/register">Register</Link>
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">Error Message</div>
                <a href="/login" className="text-white text-center m-4 hover:text-[#018053] transition-all duration-500">Already have an account? Login</a>
            </form>
            </div>

            {/*Right-Container*/}
            <div className= "h-full w-[50%] flex flex-col justify-center items-center transition-transform duration-500">
                <h1 className="text-[#018053] text-[115px] text-center font-bold">Kwenta</h1>
                <h5 className="text-center text-black text-[32px] font-normal">Stay on top of your finances and take<br/>control of your future.</h5>
            </div>
        </div>
    );
}