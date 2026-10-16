export function UseCases() {
  return (
    <section className="section wrap" id="use" aria-labelledby="use-title">
      <div className="case">
        <figure className="frame shutter">
          <img
            src="/images/reception.jpg"
            width={1248}
            height={832}
            alt="小型美容室的接待櫃、空白預約簿和窗邊的椅子，示例空間，並非真實店舖。"
          />
        </figure>
        <div className="case-copy">
          <h2 className="head" id="use-title">
            美容院先用得着
          </h2>
          <p>
            面部護理室每天都在答同一類問題：補濕做多久、收費幾多、明天有沒有位。回覆只引用店方寫下的說明。
          </p>
          <p>有沒有位，要職員確認。系統不會把查詢說成已經訂好。醫療、投訴和退款，直接交接。</p>
        </div>
      </div>
      <div className="trainer" style={{ marginTop: "2.5rem" }}>
        <div className="trainer-copy">
          <h3 className="head">個人教練是下一個場景</h3>
          <p>不是另一套產品。問堂數、試堂和時間，同樣只按教練提供的資料回覆，時段仍由人確認。</p>
        </div>
        <figure className="frame">
          <img
            src="/images/training.jpg"
            width={1248}
            height={832}
            alt="舊唐樓裡的木凳、啞鈴和紅色阻力帶，用來表現精品健身室，並非真實場地。"
          />
        </figure>
      </div>
      <figure className="frame" style={{ marginTop: "2.5rem" }}>
        <img
          src="/images/treatment.jpg"
          width={1248}
          height={832}
          alt="一間只有一張護理床和木推車的面部護理室，示例空間，並非真實店舖。"
        />
      </figure>
    </section>
  );
}
