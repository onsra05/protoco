import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validated.error.flatten() },
        { status: 400 }
      );
    }

    // In production, integrate with Resend, SendGrid, or similar
    // For now, we log and return success
    console.log("Contact form submission:", {
      name: validated.data.name,
      email: validated.data.email,
      subject: validated.data.subject,
      messageLength: validated.data.message.length,
    });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
