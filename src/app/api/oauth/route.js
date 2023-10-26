import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async (req, res) => {
  if (req.method === "GET") {
    const csrfState = Math.random().toString(36).substring(2);

    // You can set the CSRF token as a cookie
    res.setHeader(
      "Set-Cookie",
      `csrfState=${csrfState}; Max-Age=60000; HttpOnly; Secure`
    );

    let url = "https://www.tiktok.com/v2/auth/authorize/";
    // Customize the query parameters based on your needs
    url += `?client_key=aw1r5czwe50oigz9`;
    url +=
      "&scope=user.info.basic,user.info.profile,user.info.stats,video.list";
    url += "&response_type=code";
    url += `&redirect_uri=https://first-next-app1.vercel.app/redirect`;
    url += `&state=${csrfState}`;

    return NextResponse.json({ url });
  } else {
    res.status(405).end(); // Respond with "Method Not Allowed" for non-GET requests
  }
};
