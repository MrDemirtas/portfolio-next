export const getData = async (endpoint: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}/${endpoint}`;
  return await fetch(url).then((res) => res.json());
};
