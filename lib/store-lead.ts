import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LeadInput } from "./lead";

const file = path.join(process.cwd(), "data", "leads.json");
const maxLeads = 500;

export type StoredLead = LeadInput & {
  id: string;
  createdAt: string;
  mode: "demo";
  delivered: false;
};

export async function storeLead(value: LeadInput): Promise<StoredLead> {
  await mkdir(path.dirname(file), { recursive: true });
  let existing: StoredLead[] = [];
  try {
    const parsed = JSON.parse(await readFile(file, "utf8")) as unknown;
    if (Array.isArray(parsed)) existing = parsed as StoredLead[];
  } catch {
    existing = [];
  }
  const lead: StoredLead = {
    ...value,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    mode: "demo",
    delivered: false,
  };
  const next = [...existing, lead].slice(-maxLeads);
  await writeFile(file, JSON.stringify(next, null, 2));
  return lead;
}
