import { NextResponse } from "next/server";
import dbConnection from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await dbConnection();

    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("Database error...", { status: 500 });
  }
};

// export const GET = async (request) => {
//   try {
//     await dbConnection();

//     const posts = await Post.find();

//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

export async function POST(request) {
  const { title, desc, content, username, img } = await request.json();
  await dbConnection();
  await Post.create({ title, desc, content, username, img });
  return NextResponse.json(
    { message: "Post created successfully" },
    { status: 200 }
  );
}
