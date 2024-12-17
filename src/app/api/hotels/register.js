import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {

    } catch (error) {
        return NextResponse.json({
            message: "Error processing request",
            error: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }
}