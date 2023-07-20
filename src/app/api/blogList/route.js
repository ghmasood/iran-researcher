import { NextResponse } from "next/server";
import postLists from "./data.json";

export async function GET() {
  return NextResponse.json(postLists);
}

