const AUDIENCE_ID = "a9ec2ace-7422-450a-88cd-83409353388f";
const ALLOWED_ORIGINS = [
  "https://periodictableofweapons.com",
  "https://www.periodictableofweapons.com",
  "http://localhost:4321",
];

function corsHeaders(origin: string | null) {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function onRequestOptions(context: any) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(context.request.headers.get("Origin")),
  });
}

export async function onRequestPost(context: any) {
  const { request, env } = context;
  const origin = request.headers.get("Origin");
  const headers = corsHeaders(origin);

  try {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Valid email address required." },
        { status: 400, headers }
      );
    }

    const res = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + env.RESEND_API_KEY.toString(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`Resend API error: ${res.status} ${err}`);
      return Response.json(
        { error: "Something went wrong. Please try again." },
        { status: 500, headers }
      );
    }

    return Response.json({ success: true }, { status: 200, headers });
  } catch (e: any) {
    console.error("Subscribe error:", e.message);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500, headers }
    );
  }
}
