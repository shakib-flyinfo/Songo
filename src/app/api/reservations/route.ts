import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { date, time, guests, occasion } = body ?? {};

  if (!date || !time || !guests) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // TODO: এখানে ডাটাবেসে সেভ / ইমেইল পাঠানো / অন্য সার্ভিস কল করো
  console.log("New reservation request:", { date, time, guests, occasion });

  return NextResponse.json({ ok: true });
}
