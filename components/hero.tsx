import { sampleStudio, scenarios } from "@/lib/sample";

export function Hero() {
  const sample = scenarios[0];
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="display lines" id="hero-title">
            <span className="line">
              <span data-line="" style={{ ["--i" as string]: 0 }}>
                查詢即時有人覆
              </span>
            </span>
            <span className="line">
              <span data-line="" style={{ ["--i" as string]: 1 }}>
                預約不再靠記憶
              </span>
            </span>
          </h1>
          <p className="lead" data-rise="" style={{ ["--i" as string]: 2 }}>
            StudioFlow 按店內資料回覆，不確定就交回職員。
          </p>
          <div className="actions" data-rise="" style={{ ["--i" as string]: 3 }}>
            <a className="button" href="#demo">
              預約免費示範
            </a>
            <a className="button button-ink" href="#product">
              查看產品示範
            </a>
          </div>
        </div>
        <div className="desk" data-ui="">
          <p className="desk-name">{sampleStudio.name}</p>
          <p className="small">示例店，並非真實客戶。</p>
          <p>{sample.guest}</p>
          <div className="reply" data-outcome={sample.outcome}>
            <p className="reply-kind">按店內資料回覆</p>
            <p>{sample.reply}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
