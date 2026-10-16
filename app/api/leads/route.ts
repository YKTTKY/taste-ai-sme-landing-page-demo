import { NextResponse } from "next/server";
import { validateLead } from "@/lib/lead";
import { storeLead } from "@/lib/store-lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const demoMessage = "已記下。這是示範模式，查詢存在這部伺服器，尚未送到電郵、CRM 或任何外部系統。";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "未能讀取這份查詢，請再試一次。" } }, { status: 400 });
  }

  const result = validateLead(raw);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
  }

  try {
    await storeLead(result.value);
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "未能寫入本機紀錄。查詢沒有送到任何外部系統。" } },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, mode: "demo", delivered: false, message: demoMessage });
}
