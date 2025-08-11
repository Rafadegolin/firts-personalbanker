// lib/security.ts
export const CSRF_COOKIE = "csrfToken";

export function setCSRFToken(): string {
  // client only
  const arr = new Uint8Array(32);
  (globalThis.crypto || window.crypto).getRandomValues(arr);
  const token = Array.from(arr)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  document.cookie = `${CSRF_COOKIE}=${token}; Path=/; SameSite=Lax; Secure`;
  return token;
}

export function validateCSRFToken(token: string): boolean {
  const m = document.cookie.match(new RegExp(`${CSRF_COOKIE}=([^;]+)`));
  return Boolean(token && m && m[1] === token);
}

export function sanitizeInput(s: string): string {
  return s.replace(/[<>]/g, (c) => (c === "<" ? "&lt;" : "&gt;"));
}

export function validateHoneypot(v?: string): boolean {
  return !v; // deve estar vazio
}

// Rate limit simples no cliente para reduzir spam automático
export function checkRateLimit(
  key: string,
  windowMs = 60_000,
  max = 3
): boolean {
  try {
    const now = Date.now();
    const raw = localStorage.getItem(`rl:${key}`);
    const hits: number[] = raw ? JSON.parse(raw) : [];
    const recent = hits.filter((t) => now - t < windowMs);
    if (recent.length >= max) {
      localStorage.setItem(`rl:${key}`, JSON.stringify(recent));
      return false;
    }
    recent.push(now);
    localStorage.setItem(`rl:${key}`, JSON.stringify(recent));
    return true;
  } catch {
    return true;
  }
}
