import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();

  try {
    const { email, password } = await request.json();

    if (email === "abc@gmail.com" && password === "123456") {
      cookieStore.set("isLogin", "1", {
        httpOnly: true,
      });

      return NextResponse.json({
        message: "Login successful",
        status: 200,
      });
    } else {
      cookieStore.set("isLogin", "0", {
        httpOnly: true,
      });
      return NextResponse.json({
        message: "Invalid Email or Password",
        status: 401,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      status: 500,
    });
  }
}

export async function GET() {
  return NextResponse.json({ message: "hello" });
}
