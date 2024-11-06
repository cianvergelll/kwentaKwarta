import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { randomBytes, scryptSync } from "crypto";  // Importing crypto functions

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();

        // Generate a salt (random value)
        const salt = randomBytes(16).toString("hex");  // Random salt for extra security

        // Hash the password using the scryptSync method
        const hashedPassword = scryptSync(password, salt, 64).toString("hex");

        // Save the salt and hashed password to the database
        await connectMongoDB();
        await User.create({ name, email, password: hashedPassword, salt }); // You need to store salt too for comparison during login

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Hashed Password: ", hashedPassword);

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Error processing the request." }, { status: 500 });
    }
}
