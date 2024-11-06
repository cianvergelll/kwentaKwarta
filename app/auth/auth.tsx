"use client";

import { useState } from "react";
import Login from "../login/page";
import Register from "../register/page";

export default function Auth() {
    const [showLogin, setShowLogin] = useState(true);

    const handleToggle = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="relative h-screen flex overflow-hidden justify-center items-center">
            <div
                className={`absolute flex w-full h-full transition-transform duration-500 ease-in-out transform ${
                    showLogin ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Login Form */}
                <div className="w-full flex-shrink-0 flex items-center justify-center bg-white">
                    <Login onToggle={handleToggle} />
                </div>

                {/* Register Form */}
                <div className="w-full flex-shrink-0 flex items-center justify-center bg-white">
                    <Register onToggle={handleToggle} />
                </div>
            </div>
        </div>
    );
}


