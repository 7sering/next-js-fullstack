import { NextResponse } from "next/server";
import dbConnection from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await dbConnection();

    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error...", { status: 500 });
  }
};

/// Delete Single Post
export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await dbConnection();

    await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database error...", { status: 500 });
  }
};
