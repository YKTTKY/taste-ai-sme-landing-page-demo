"use client";

import { useState } from "react";
import { sampleStudio, scenarios } from "@/lib/sample";

export function InquiryDesk() {
  const [id, setId] = useState(scenarios[0].id);
  const current = scenarios.find((item) => item.id === id) ?? scenarios[0];

  return (
    <div className="desk desk-live" data-ui="">
      <div>
        <p className="desk-name">{sampleStudio.name}</p>
        <p className="facts">{sampleStudio.facts}</p>
      </div>
      <div className="desk-thread">
        <fieldset className="choices">
          <legend className="small">選擇一條客人查詢</legend>
          {scenarios.map((item) => (
            <label className="choice" key={item.id}>
              <input
                type="radio"
                name="scenario"
                value={item.id}
                checked={item.id === current.id}
                onChange={() => setId(item.id)}
              />
              {item.guest}
            </label>
          ))}
        </fieldset>
        <div className="reply" data-outcome={current.outcome} key={current.id} aria-live="polite">
          <p className="reply-kind">{current.outcome === "handoff" ? "交給職員" : "按店內資料回覆"}</p>
          <p>{current.reply}</p>
        </div>
      </div>
    </div>
  );
}
