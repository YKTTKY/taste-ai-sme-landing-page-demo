export function SiteFooter() {
  return (
    <footer className="section wrap footer">
      <p className="display footer-name">StudioFlow</p>
      <div className="footer-grid" style={{ marginTop: "1.5rem" }}>
        <div>
          <p>為香港美容院及個人教練而設的查詢與預約自動化。這是示範頁面。</p>
          <p style={{ marginTop: "0.75rem" }}>
            相片由圖像工具生成，用來表現店舖空間，並非真實客戶或真實店舖。
          </p>
          <p style={{ marginTop: "0.75rem" }}>表單只寫入本機檔案，不會送到電郵、CRM 或任何外部系統。</p>
          <div className="actions" style={{ marginTop: "1.25rem" }}>
            <a className="button" href="#demo">
              預約免費示範
            </a>
            <a className="button button-ink" href="#product">
              查看產品示範
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
