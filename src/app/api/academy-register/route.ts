import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      gender,
      college,
      programName,
      academicYear,
      highestEducation,
      department,
      referredBy,
      country,
      state,
      city,
      email,
      mobileNumber,
      emergencyContact,
      username,
      password,
      termsAccepted,
    } = body;

    // Required fields check (matching register form validations)
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !college ||
      !academicYear ||
      !highestEducation ||
      !department ||
      !country ||
      !state ||
      !city ||
      !email ||
      !mobileNumber ||
      !emergencyContact ||
      !username ||
      !password ||
      !termsAccepted
    ) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Check if email or username already exists
    const existingUser = await prisma.registration.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "A user with this email or username already exists" },
        { status: 409 }
      );
    }

    // Securely hash the password using bcrypt (rounds = 10)
    const passwordHash = await bcrypt.hash(password, 10);

    const registration = await prisma.registration.create({
      data: {
        firstName,
        lastName,
        gender,
        college,
        programName: programName || null,
        academicYear,
        highestEducation,
        department,
        referredBy: referredBy || null,
        country,
        state,
        city,
        email,
        mobileNumber,
        emergencyContact,
        username,
        passwordHash,
        termsAccepted,
      },
    });

    return NextResponse.json(
      { success: true, registrationId: registration.id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration API Error:", error);
    return NextResponse.json(
      { 
        error: "An error occurred during registration.",
        details: error instanceof Error ? error.message : String(error),
        code: error.code
      },
      { status: 500 }
    );
  }
}
