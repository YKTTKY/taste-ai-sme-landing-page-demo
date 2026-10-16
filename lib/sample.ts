export type Scenario = {
  id: string;
  guest: string;
  outcome: "reply" | "handoff";
  reply: string;
};

export const sampleStudio = {
  name: "澄光面部護理",
  facts: "示例店，位於旺角。週二至日 11:00-20:00，週一休息。補濕護理 75 分鐘，HK$680。不提供醫療美容。時段要由職員確認。",
};

export const scenarios: Scenario[] = [
  {
    id: "book",
    guest: "聽日下午三點，仲有冇補濕護理？",
    outcome: "reply",
    reply:
      "補濕護理是 75 分鐘，收費 HK$680。本店週二至日 11:00-20:00 營業，週一休息。下午三點有沒有空檔，要由職員確認。這項查詢已記下。",
  },
  {
    id: "move",
    guest: "星期六個預約，想改去星期日。",
    outcome: "reply",
    reply:
      "已記下改期意向，由星期六改到星期日。這個示範沒有連接日曆，所以不會改動原有預約，需要職員確認。",
  },
  {
    id: "medical",
    guest: "你哋做不做醫美注射？",
    outcome: "handoff",
    reply: "店方資料沒有這項服務，問題亦涉及醫療。系統不會作答，已交給職員。",
  },
];
