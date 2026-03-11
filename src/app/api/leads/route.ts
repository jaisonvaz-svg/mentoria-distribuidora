import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  email: string;
  whatsapp: string;
}

function isValidEmail(email: string): boolean {
  // RFC 5322 simplified pattern covering the vast majority of valid email addresses
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
    email
  );
}

function isValidWhatsapp(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { name, email, whatsapp } = body as Partial<LeadPayload>;

  // Validate required fields
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Nome inválido. Informe pelo menos 2 caracteres." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { error: "E-mail inválido." },
      { status: 400 }
    );
  }

  if (
    !whatsapp ||
    typeof whatsapp !== "string" ||
    !isValidWhatsapp(whatsapp.trim())
  ) {
    return NextResponse.json(
      { error: "WhatsApp inválido. Informe DDD + número." },
      { status: 400 }
    );
  }

  const lead: LeadPayload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    whatsapp: whatsapp.trim(),
  };

  // Log the lead (in production, persist to a database or CRM)
  // PII (email, whatsapp) is masked to avoid exposing sensitive data in logs
  console.log("[Lead captured]", {
    name: lead.name,
    email: lead.email.replace(/(.{2}).+(@.+)/, "$1***$2"),
    whatsapp: lead.whatsapp.replace(/.(?=.{4})/g, "*"),
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json(
    { message: "Lead recebido com sucesso!", lead },
    { status: 201 }
  );
}
