import { NextRequest, NextResponse } from "next/server";
import { Project, ProjectsResponse } from "@/types/types";

import { Query } from "node-appwrite";
import { databases } from "@/appwrite";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse<Project | unknown>> {
  try {
    let { slug } = await params;
    slug = decodeURIComponent(slug);

    if (slug.trim() === "") {
      return NextResponse.json("Invalid slug", { status: 500 });
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
