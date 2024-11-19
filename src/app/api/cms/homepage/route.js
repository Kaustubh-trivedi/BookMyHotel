
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionURI } from "../../../../lib/connection";
import { cms_homepage } from "../../../../lib/model/cms_homepage";

export async function GET() {
    await mongoose.connect(connectionURI)
    return NextResponse.json({ status: true });
}

export async function POST(request) {
    try {
        await mongoose.connect(connectionURI);
        const payload = await request.json();
        const findExistingData = await cms_homepage.find();
        if (findExistingData.length) {
            const updateData = await cms_homepage.findByIdAndUpdate(
                findExistingData._id,
                payload,
                { new: true }
            )
            return NextResponse.json({ code: 200, message: "Data updated successfully.", data: updateData }, { status: 200 })
        } else {
            const data = new cms_homepage(payload);
            const result = await data.save();
            return NextResponse.json({ code: 200, message: "Data updated successfully.", result: result }, { status: 200 })
        }
    } catch (error) {
        console.log("Error:", error instanceof Error ? error.message : "Unknown error");
        return NextResponse.json({
            message: "Error processing request",
            error: error instanceof Error ? error.message : "Unknown error",
        }, { status: 500 });
    }

}