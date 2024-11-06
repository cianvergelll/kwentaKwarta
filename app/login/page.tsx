"use client";

import Link from "next/link";
import { useState } from "react";
import  { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router =  useRouter();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await signIn("credentials", {
                email,
                password,
                redirect: false, 
            });

            if (response?.error) {
                setError("Invalid Credentials");
            } else {
                setError("");
            }

            router.replace("/expenses");
        } catch (error) {}
    };
    
    return (
        <div className="h-screen flex overflow-hidden">
            {/*Left- Container*/}
            <div className= "h-full w-[50%] flex flex-col justify-center items-center transition-transform duration-500">
                <h1 className="text-[#018053] text-[115px] text-center font-bold">Kwenta</h1>
                <h5 className="text-center text-black text-[32px] font-normal">Stay on top of your finances and take<br/>control of your future.</h5>
            </div>

            {/*Right-Container*/}
            <div className= "h-full flex flex-col w-[50%] bg-gradient-to-br from-[#018053] to-[#001a10] justify-center items-center rounded-tl-xl rounded-bl-xl transition-transform duration-500">
                <form onSubmit={handleSubmit} className="flex flex-col w-[50%]">
                            <input onChange = {(e) =>  setEmail(e.target.value)} type="text" placeholder="Username" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                            <input onChange = {(e) =>  setPassword(e.target.value)} type="password" placeholder="Password" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                            <button className="bg-white py-3 rounded-full block text-center hover:bg-[#018053] hover:text-white transition-all duration-500">Login</button>

                            {error && (
                                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                            )}
                            


                            <a href="#" className="text-white text-center m-4 hover:text-[#018053] transition-all duration-500">Forgot Password?</a>
                            <div className="border-t-2 border-white w-full mt-4 transition-all duration-500"></div>
                            <a href="/register" className="bg-white py-3 rounded-full block text-center hover:bg-[#018053] hover:text-white mt-8 transition-all duration-500">Create an Account</a>
                </form>
            </div>
        </div>
    );
}