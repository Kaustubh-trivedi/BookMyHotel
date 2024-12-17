import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
    const formData = await req.formData();
    const file = formData.get("profile_pic");
    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const sanitizedFilename = file.name.replaceAll(" ", "_");

    const fileExtension = sanitizedFilename.substring(sanitizedFilename.lastIndexOf("."));

    const timestamp = Date.now();

    const uniqueFilename = `${timestamp}_${sanitizedFilename}`;
    console.log(uniqueFilename);
    try {
        await writeFile(
            path.join(process.cwd(), "uploads/" + uniqueFilename),
            buffer
        );
        return NextResponse.json({ Message: "Success", status: 201 });
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
};