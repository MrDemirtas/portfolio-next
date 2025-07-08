import { Client, Databases } from "node-appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6810ceee003aa35f411b")
  .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!);

export const databases = new Databases(client);
