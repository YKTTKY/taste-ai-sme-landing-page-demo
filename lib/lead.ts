export const categories = ["美容院", "面部護理室", "個人教練", "精品健身室", "其他"] as const;
export const volumes = ["少於 50", "50-200", "200-500", "多於 500"] as const;
export const contactMethods = ["電話", "電郵", "WhatsApp", "其他"] as const;

export type LeadInput = {
  studioName: string;
  category: string;
  volume: string;
  workflow: string;
  contactMethod: string;
  contactDetail: string;
};

export type LeadErrors = Partial<Record<keyof LeadInput | "form", string>>;

const limits = {
  studioName: 80,
  workflow: 600,
  contactDetail: 120,
} as const;

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

function digits(value: string) {
  return value.replace(/\D/g, "").length;
}

export function validateLead(raw: unknown): { ok: true; value: LeadInput } | { ok: false; errors: LeadErrors } {
  const body = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const value: LeadInput = {
    studioName: clean(body.studioName, limits.studioName),
    category: clean(body.category, 20),
    volume: clean(body.volume, 20),
    workflow: clean(body.workflow, limits.workflow),
    contactMethod: clean(body.contactMethod, 20),
    contactDetail: clean(body.contactDetail, limits.contactDetail),
  };
  const errors: LeadErrors = {};

  if (!value.studioName) errors.studioName = "請填上店舖名稱";
  if (!categories.includes(value.category as (typeof categories)[number])) errors.category = "請選擇業務類別";
  if (!volumes.includes(value.volume as (typeof volumes)[number])) errors.volume = "請選擇每月查詢量";
  if (value.workflow.length < 2) errors.workflow = "請簡述你現時怎樣處理查詢和預約";
  if (!contactMethods.includes(value.contactMethod as (typeof contactMethods)[number])) {
    errors.contactMethod = "請選擇聯絡方式";
  }
  if (!value.contactDetail) {
    errors.contactDetail = "請留下電話或電郵";
  } else if (value.contactMethod === "電郵" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.contactDetail)) {
    errors.contactDetail = "請填上有效的電郵地址";
  } else if ((value.contactMethod === "電話" || value.contactMethod === "WhatsApp") && digits(value.contactDetail) < 8) {
    errors.contactDetail = "請填上可聯絡的電話號碼";
  }

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, value };
}
