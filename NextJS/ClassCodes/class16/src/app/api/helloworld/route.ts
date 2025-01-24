// There can be only one get request in a single file

import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json({message: "Hello World"})
}