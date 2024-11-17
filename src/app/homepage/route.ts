import { connectionURI } from "@/lib/connection";
import { cms_homepage } from "@/lib/model/cms_homepage";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionURI)
    return NextResponse.json({ status: true });
}

export async function POST(request: Request) {
    try {
        await mongoose.connect(connectionURI);
        const payload = await request.json();
        const findExistingData = await cms_homepage.find();
        if (findExistingData.length) {
            return NextResponse.json({ code: 500, message: "Data already created.", data: findExistingData }, { status: 500 })
        } else {

            const data = new cms_homepage(payload);
            const result = await data.save();
            return NextResponse.json({ code: 200, message: "Data created successfully.", result: result }, { status: 200 })
        }
    } catch (error: unknown) {
        console.log("Error:", error instanceof Error ? error.message : "Unknown error");
        return NextResponse.json({
            message: "Error processing request",
            error: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }

}