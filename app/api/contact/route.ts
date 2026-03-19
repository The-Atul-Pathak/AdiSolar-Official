import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  phone?: string | null;
  email?: string | null;
  service?: string | null;
  message?: string | null;
  source?: string | null;
}

async function insertToSupabase(leadData: LeadData): Promise<boolean> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;

  if (!url || !key) {
    console.log("Supabase not configured. Skipping.");
    return false;
  }

  try {
    const response = await fetch(`${url}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Supabase error: ${response.status} ${errorText}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error inserting into Supabase:", error);
    return false;
  }
}

async function appendToGoogleSheet(leadData: LeadData): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("Google Webhook not configured. Skipping.");
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      console.error(`Google Sheets webhook error: ${response.status}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error calling Google Webhook:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required field
    if (!body.name || typeof body.name !== "string" || body.name.trim().length === 0) {
      return NextResponse.json(
        { status: "error", message: "Name is required" },
        { status: 400 }
      );
    }

    const leadData: LeadData = {
      name: body.name,
      phone: body.phone || null,
      email: body.email || null,
      service: body.service || null,
      message: body.message || null,
      source: body.source || "contact",
    };

    // Save to both Supabase and Google Sheets in parallel
    const [dbResult, sheetResult] = await Promise.all([
      insertToSupabase(leadData),
      appendToGoogleSheet(leadData),
    ]);

    return NextResponse.json({
      status: "success",
      message: "Submission received successfully",
      db_inserted: dbResult,
      sheet_inserted: sheetResult,
    });
  } catch (error) {
    console.error("Error processing submission:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
