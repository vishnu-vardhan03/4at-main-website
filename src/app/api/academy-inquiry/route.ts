import { NextResponse } from "next/server";

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

    const inquiryData = {
      name,
      email,
      phone,
      courseInterest,
      message: message || null,
    };

    // TODO: reconnect new DB here
    // const inquiry = await db.inquiry.create({ data: inquiryData });
    const inquiry = inquiryData;

    return NextResponse.json(
      { success: true, inquiry },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { 
        error: "An error occurred while saving the inquiry.",
        details: error instanceof Error ? error.message : String(error),
        code: error && typeof error === "object" && "code" in error ? String(error.code) : undefined
      },
      { status: 500 }
    );
  }
}
