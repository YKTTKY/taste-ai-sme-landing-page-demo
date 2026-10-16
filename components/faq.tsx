const items = [
  {
    q: "回覆會不會離開店內的說法？",
    a: "不會。系統只使用你提供的療程、價錢、時間和限制。資料沒有寫到的內容，不會被編成答案。",
  },
  {
    q: "什麼時候會交回職員？",
    a: "客人問到資料以外的事情，或者涉及投訴、退款、醫療和其他敏感內容，系統會停止作答，交給職員。",
  },
  {
    q: "可以連接 WhatsApp、日曆或 CRM 嗎？",
    a: "現時不可以。這個網站沒有這些連接。查詢會先被整理，預約和改期仍要由你確認。",
  },
  {
    q: "客人資料放在哪裡？",
    a: "正式使用時，資料只用於你授權的回覆和跟進。這個示範網站不同：表單只寫入本機檔案，不會送到電郵、CRM 或任何外部系統。",
  },
];

export function Faq() {
  return (
    <section className="section wrap" id="faq" aria-labelledby="faq-title">
      <h2 className="head" id="faq-title">
        四件事先講清楚
      </h2>
      <div className="faq" style={{ marginTop: "1.75rem" }}>
        {items.map((item, index) => (
          <details className="acc" key={item.q} open={index === 0}>
            <summary>{item.q}</summary>
            <div className="acc-panel">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
