import { NextRequest, NextResponse } from "next/server";

import { ProjectsResponse } from "@/lib/types";
import { databases } from "@/appwrite";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ProjectsResponse | unknown>> {
  try {
    const response: ProjectsResponse = await databases.listDocuments(
      "6810cfb400104791b2e6",
      "6810d0330032c3807cbd"
    );
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
