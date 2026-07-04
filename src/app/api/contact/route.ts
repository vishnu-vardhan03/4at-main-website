import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { BUDGET_OPTIONS, COMPANY_SIZE_OPTIONS, SERVICE_OPTIONS } from "@/components/LeadCollection/types";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Full name is too short").max(120),
  company: z.string().trim().min(1, "Company name is required").max(160),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  service: z.enum(SERVICE_OPTIONS),
  companySize: z.enum(COMPANY_SIZE_OPTIONS),
  budget: z.enum(BUDGET_OPTIONS),
  description: z.string().trim().min(10, "Please add a few more details").max(2000),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: only a bot fills this hidden field. Pretend success and skip the write.
    if (typeof body?.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check the form for errors.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, company, email, phone, service, companySize, budget, description } =
      parsed.data;

    const lead = await prisma.lead.create({
      data: { name, company, email, phone, service, companySize, budget, description },
    });

    return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Lead capture API Error:", error);
    return NextResponse.json(
      { error: "An error occurred while saving your inquiry. Please try again." },
      { status: 500 },
    );
  }
}
