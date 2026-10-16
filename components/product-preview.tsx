import { InquiryDesk } from "@/components/inquiry-desk";

export function ProductPreview() {
  return (
    <section className="section wrap" id="product" aria-labelledby="product-title">
      <div className="product-intro">
        <h2 className="head" id="product-title">
          看一條查詢怎樣被處理
        </h2>
        <p>下面是示例店澄光面部護理。資料是編來示範的，不是真實客戶，也沒有連接日曆。</p>
      </div>
      <InquiryDesk />
    </section>
  );
}
