# StudioFlow AI

示範頁面，對象是香港的美容院、面部護理室和個人教練。頁面語言是香港書面中文。

## 示範模式

沒有配置電郵、CRM、WhatsApp、日曆或收款。`POST /api/leads` 會檢查表單，然後把查詢追加到本機的 `data/leads.json`。這個檔案已被 git 忽略。

成功提示會寫明：查詢只存在這部伺服器，沒有送到任何外部系統。寫入失敗時，頁面同樣不會聲稱已經送出。

## 開發

```bash
npm install
npm run dev
```

頁面在 [http://localhost:3000](http://localhost:3000)。

相片放在 `public/images/`，由圖像工具生成，用來表現店舖空間，不是真實客戶。

Google 的 Noto Sans HK 與 Noto Serif HK 在 `next/font` 只有拉丁字母子集。中文會用系統的 Songti TC、PMingLiU、PingFang HK 或 Microsoft JhengHei。
