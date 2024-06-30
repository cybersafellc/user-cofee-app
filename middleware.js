import { NextResponse } from "next/server";
import authMiddleware from "./utils/middlewares/auth-middleware";

const auth = ["/orders"];

export default async function middleware(request) {
  const url = new URL(request.url);
  if (auth.includes(url.pathname)) {
    const responses = await authMiddleware(request);
    return responses;
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matchers: ["/orders"],
};
