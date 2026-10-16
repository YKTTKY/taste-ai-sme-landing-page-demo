const plans = [
  {
    className: "plan plan-start",
    name: "起步",
    price: "HK$1,800",
    fit: "一個店舖，先把查詢收齊。",
    points: ["收集客人的查詢", "按你的資料草擬回覆", "發送和確認仍由你負責"],
  },
  {
    className: "plan plan-main",
    name: "日常",
    price: "HK$3,600",
    fit: "適合每天都要處理查詢的店。",
    points: ["查詢和預約意向放在同一列表", "尚未回覆的客人會標出來", "不確定的問題交給職員"],
  },
  {
    className: "plan plan-care",
    name: "檢視",
    price: "HK$6,800",
    fit: "包括日常方案，多一個人看住說法。",
    points: ["每週看回覆是否貼近店內說法", "寫下敏感問題的交接規則", "仍然由你確認預約"],
  },
];

export function Packages() {
  return (
    <section className="section wrap" id="plans" aria-labelledby="plans-title">
      <h2 className="head" id="plans-title">
        三個建議收費
      </h2>
      <p style={{ marginTop: "0.9rem" }}>
        以港幣計算，現未開放付款。三個方案都不包括 WhatsApp、日曆或收款系統。
      </p>
      <div className="plans" style={{ marginTop: "2.25rem" }}>
        {plans.map((plan) => (
          <article className={plan.className} key={plan.name}>
            <h3 className="head">{plan.name}</h3>
            <p className="price">
              {plan.price} <span className="small">每月</span>
            </p>
            <p>{plan.fit}</p>
            <ul>
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
