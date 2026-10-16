const steps = [
  { verb: "接收", text: "客人從不同渠道來的問題，收進同一個列表。" },
  { verb: "回覆", text: "只按你寫下的療程、價錢、時間和限制來草擬。" },
  { verb: "整理", text: "把想預約、想改期、想問價的查詢分開。" },
  { verb: "跟進", text: "提醒你哪些客人還沒有得到答覆。" },
  { verb: "交接", text: "資料沒有寫到，或內容敏感，就交給職員。" },
];

export function Workflow() {
  return (
    <section className="section wrap" id="flow" aria-labelledby="flow-title">
      <h2 className="head" id="flow-title">
        一條查詢怎樣走完
      </h2>
      <div className="flow-list" style={{ marginTop: "2.25rem" }}>
        {steps.map((step) => (
          <div className="flow-row shift" key={step.verb}>
            <p className="verb">{step.verb}</p>
            <p className="flow-note">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
