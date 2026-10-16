"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { categories, contactMethods, validateLead, volumes, type LeadErrors, type LeadInput } from "@/lib/lead";

const empty: LeadInput = {
  studioName: "",
  category: "",
  volume: "",
  workflow: "",
  contactMethod: "",
  contactDetail: "",
};

export function LeadForm() {
  const [values, setValues] = useState<LeadInput>(empty);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(field: keyof LeadInput, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateLead(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("error");
      setMessage("有幾項還未填好。");
      return;
    }
    setErrors({});
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(result.value),
      });
      const payload = (await response.json()) as { ok?: boolean; message?: string; errors?: LeadErrors };
      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setStatus("error");
        setMessage(payload.errors?.form || "未能記下。這次沒有送到任何外部系統。");
        return;
      }
      setStatus("success");
      setMessage(payload.message || "已記下。這是示範模式，查詢尚未送到任何外部系統。");
      setValues(empty);
    } catch {
      setStatus("error");
      setMessage("未能記下。這次沒有送到任何外部系統。");
    }
  }

  return (
    <section className="section wrap" id="demo" aria-labelledby="demo-title">
      <div className="demo">
        <div>
          <h2 className="head" id="demo-title">
            預約免費示範
          </h2>
          <p style={{ marginTop: "0.9rem" }}>
            這是示範模式。提交之後只會寫進這個網站的伺服器，不會送到電郵、CRM 或任何外部系統。
          </p>
          <p style={{ marginTop: "0.8rem" }}>留下店舖和聯絡方法，我們用這個表單看你現時怎樣處理查詢。</p>
        </div>
        {status === "success" ? (
          <div className="form-status" role="status">
            <p>{message}</p>
            <button className="button" type="button" style={{ marginTop: "1rem" }} onClick={() => setStatus("idle")}>
              再填一份
            </button>
          </div>
        ) : (
          <form className="form-grid" onSubmit={onSubmit} noValidate>
            <Field label="店舖名稱" error={errors.studioName} id="studio-name">
              <input
                id="studio-name"
                name="studioName"
                autoComplete="organization"
                maxLength={80}
                value={values.studioName}
                aria-invalid={Boolean(errors.studioName)}
                aria-describedby={errors.studioName ? "studio-name-error" : undefined}
                onChange={(event) => update("studioName", event.target.value)}
              />
            </Field>
            <Field label="業務類別" error={errors.category} id="category">
              <select
                id="category"
                name="category"
                value={values.category}
                aria-invalid={Boolean(errors.category)}
                aria-describedby={errors.category ? "category-error" : undefined}
                onChange={(event) => update("category", event.target.value)}
              >
                <option value="">請選擇</option>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="每月查詢量（大約）" error={errors.volume} id="volume">
              <select
                id="volume"
                name="volume"
                value={values.volume}
                aria-invalid={Boolean(errors.volume)}
                aria-describedby={errors.volume ? "volume-error" : undefined}
                onChange={(event) => update("volume", event.target.value)}
              >
                <option value="">請選擇</option>
                {volumes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="你現時怎樣處理查詢和預約" error={errors.workflow} id="workflow">
              <textarea
                id="workflow"
                name="workflow"
                maxLength={600}
                value={values.workflow}
                aria-invalid={Boolean(errors.workflow)}
                aria-describedby={errors.workflow ? "workflow-error" : undefined}
                onChange={(event) => update("workflow", event.target.value)}
              />
            </Field>
            <Field label="希望我們怎樣聯絡" error={errors.contactMethod} id="contact-method">
              <select
                id="contact-method"
                name="contactMethod"
                value={values.contactMethod}
                aria-invalid={Boolean(errors.contactMethod)}
                aria-describedby={errors.contactMethod ? "contact-method-error" : undefined}
                onChange={(event) => update("contactMethod", event.target.value)}
              >
                <option value="">請選擇</option>
                {contactMethods.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="聯絡資料" error={errors.contactDetail} id="contact-detail">
              <input
                id="contact-detail"
                name="contactDetail"
                autoComplete="tel"
                maxLength={120}
                placeholder="電話或電郵"
                value={values.contactDetail}
                aria-invalid={Boolean(errors.contactDetail)}
                aria-describedby={errors.contactDetail ? "contact-detail-error" : undefined}
                onChange={(event) => update("contactDetail", event.target.value)}
              />
            </Field>
            {message ? (
              <p className="field-error" role="alert">
                {message}
              </p>
            ) : null}
            <button className="button" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "正在記下" : "預約免費示範"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      {children}
      {error ? (
        <span className="field-error" id={`${id}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
