// src/lib/server/security.ts
import { cookies, headers } from "next/headers";

export async function validateCSRFTokenServer(tokenFromBody?: string) {
  const store = await cookies(); // ✅ precisa de await
  const csrfCookie = store.get("csrfToken")?.value;
  return (
    Boolean(tokenFromBody) &&
    Boolean(csrfCookie) &&
    tokenFromBody === csrfCookie
  );
}

export async function getClientIP() {
  const h = await headers();
  const xff = h.get("x-forwarded-for");
  return xff?.split(",")[0]?.trim() || h.get("x-real-ip") || "0.0.0.0";
}

export function validateHoneypotServer(honeypot?: string) {
  return !honeypot; // válido quando vazio
}

// (opcional) rate limit bem simples em memória p/ DEV
const WINDOW_MS = 60_000;
const MAX_REQ = 5;
const bucket = new Map<string, number[]>();

export async function rateLimitByIP() {
  const ip = await getClientIP();
  const now = Date.now();
  const arr = bucket.get(ip) ?? [];
  const recent = arr.filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  bucket.set(ip, recent);
  return recent.length <= MAX_REQ;
}
