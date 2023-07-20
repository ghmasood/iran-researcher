import { NextResponse } from "next/server";
import post from "./data.json";

export async function GET() {
  return NextResponse.json(post);
}
