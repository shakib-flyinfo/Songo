import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = String(body?.email ?? "").trim();

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  // TODO: নিউজলেটার সার্ভিসে (Mailchimp ইত্যাদি) যোগ করো
  console.log("New subscriber:", email);

  return NextResponse.json({ ok: true });
}
