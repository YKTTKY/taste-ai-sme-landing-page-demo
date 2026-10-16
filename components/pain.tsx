const pains = [
  {
    title: "打烊之後，查詢沒有人看",
    text: "客人夜晚也會問。第二天先回，很多人已經約了別家。",
  },
  {
    title: "幾個渠道一齊響，你只回得一個",
    text: "電話、表格、社交媒體各有各的對話。你在做療程時，看不到全部。",
  },
  {
    title: "改期和問價，每天都再打一遍",
    text: "價錢、時長、可否改期，這些話你已經答過很多遍。",
  },
  {
    title: "沒有資料的問題，硬答會得罪人",
    text: "店方沒有寫下的內容，系統不應該自己編成答案。",
  },
];

export function Pain() {
  return (
    <section className="section wrap" id="pain" aria-labelledby="pain-title">
      <div className="pain-grid">
        <div>
          <h2 className="head" id="pain-title">
            客人走掉，多半是等太久
          </h2>
          <div className="pain-list" style={{ marginTop: "2rem" }}>
            {pains.map((pain) => (
              <article key={pain.title} className="rise">
                <h3 className="head">{pain.title}</h3>
                <p>{pain.text}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="frame">
          <img
            className="drift"
            src="/images/still-life.jpg"
            width={1024}
            height={1024}
            alt="石面上的布巾、玻璃瓶和朱色絲帶，用來表現護理室的物料，並非真實店舖。"
          />
        </figure>
      </div>
    </section>
  );
}
