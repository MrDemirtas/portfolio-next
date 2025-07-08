import { headers } from "next/headers";

export const getData = async (endpoint: string) => {
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("x-forwarded-host") || "localhost:3000";
  const url = `${protocol}://${host}/${endpoint}`;
  return await fetch(url).then((res) => res.json());
};
