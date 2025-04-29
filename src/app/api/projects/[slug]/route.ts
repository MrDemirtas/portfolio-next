import { NextRequest, NextResponse } from "next/server";
import { Project, ProjectsResponse } from "@/lib/types";

import { Query } from "node-appwrite";
import { databases } from "@/appwrite";

export async function GET(
  request: NextRequest
): Promise<NextResponse<Project | unknown>> {
  try {
    const slug: string = decodeURIComponent(
      request.nextUrl.pathname.split("/").pop() || ""
    );

    if (slug.trim() === "") {
      return NextResponse.json("Invalid id", { status: 500 });
    }

    const response: ProjectsResponse = await databases.listDocuments(
      "6810cfb400104791b2e6",
      "6810d0330032c3807cbd",
      [Query.equal("slug", slug)]
    );
    return NextResponse.json(response.documents[0]);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
