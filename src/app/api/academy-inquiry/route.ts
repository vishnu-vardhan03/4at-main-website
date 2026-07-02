import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, courseInterest, message } = body;

    // Server-side validation
    if (!name || !email || !phone || !courseInterest) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        courseInterest,
        message: message || null,
      },
    });

    return NextResponse.json(
      { success: true, inquiry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { 
        error: "An error occurred while saving the inquiry.",
        details: error instanceof Error ? error.message : String(error),
        code: error.code
      },
      { status: 500 }
    );
  }
}
