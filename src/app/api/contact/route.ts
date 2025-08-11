// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validation";
import {
  validateCSRFTokenServer,
  validateHoneypotServer,
  rateLimitByIP,
} from "@/lib/server/security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { csrfToken, honeypot } = body || {};

    // 1) CSRF
    const csrfOk = await validateCSRFTokenServer(csrfToken);
    if (!csrfOk) {
      return NextResponse.json({ error: "CSRF inválido" }, { status: 403 });
    }

    // 2) Honeypot (silencia bots)
    if (!validateHoneypotServer(honeypot)) {
      // 204: no content (finge que deu tudo certo)
      return NextResponse.json({ ok: true }, { status: 204 });
    }

    // 3) Rate limit simples (DEV)
    const allowed = await rateLimitByIP();
    if (!allowed) {
      return NextResponse.json({ error: "Rate limit" }, { status: 429 });
    }

    // 4) Validação (Zod)
    const { success, errors } = validateContactForm(body);
    if (!success) {
      return NextResponse.json(
        { error: errors?.[0]?.message || "Dados inválidos" },
        { status: 400 }
      );
    }

    // 5) Encaminha pro N8N
    const url = process.env.N8N_WEBHOOK_URL;
    if (!url) {
      return NextResponse.json(
        { error: "Webhook não configurado" },
        { status: 500 }
      );
    }

    const resp = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // envie o body original (com csrf/honeypot, timestamp, etc.)
      body: JSON.stringify(body),
      // garante que não cacheia e evita edge bugs
      cache: "no-store",
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      console.error("[contact] webhook error", resp.status, text);
      return NextResponse.json(
        { error: "Erro ao encaminhar" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] server error", err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
