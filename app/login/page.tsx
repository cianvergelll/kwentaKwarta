import Link from "next/link";

export default function Login() {
    return (
        <div className="h-screen flex overflow-hidden">
            {/*Left- Container*/}
            <div className= "h-full w-[50%] flex flex-col justify-center items-center transition-transform duration-500">
                <h1 className="text-[#018053] text-[115px] text-center font-bold">Kwenta</h1>
                <h5 className="text-center text-black text-[32px] font-normal">Stay on top of your finances and take<br/>control of your future.</h5>
            </div>

            {/*Right-Container*/}
            <div className= "h-full flex flex-col w-[50%] bg-gradient-to-br from-[#018053] to-[#001a10] justify-center items-center rounded-tl-xl rounded-bl-xl transition-transform duration-500">
                <form className="flex flex-col w-[50%]">
                            <input type="text" placeholder="Username" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                            <input type="password" placeholder="Password" className="bg-transparent border-2 border-white text-white placeholder-white mb-4 px-4 py-3 rounded-full transition-all duration-500"></input>
                            <Link className="bg-white py-3 rounded-full block text-center hover:bg-[#018053] hover:text-white transition-all duration-500" href="/login">Login</Link>
                            <a href="#" className="text-white text-center m-4 hover:text-[#018053] transition-all duration-500">Forgot Password?</a>
                            <div className="border-t-2 border-white w-full mt-4 transition-all duration-500"></div>
                            <a href="/register" className="bg-white py-3 rounded-full block text-center hover:bg-[#018053] hover:text-white mt-8 transition-all duration-500">Create an Account</a>
                </form>
            </div>
        </div>
    );
}