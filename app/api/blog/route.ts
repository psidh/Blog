import { connect } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import Post from "@/model/postSchema";

export async function GET(req: NextRequest) {
  connect();
  try {
    const posts = await Post.find();
    console.log(posts);
    return NextResponse.json(posts, { status: 200 });
  } catch (e: any) {
    console.log(e.message);
    return NextResponse.json({ message: "Error fetching posts", status: 500 });
  }
}

export async function POST(req: NextRequest) {
  connect();
  try {
    const { title, subtitle, content } = await req.json();
    console.log(title, content, subtitle);

    if (!content || !title || !subtitle) {
      return NextResponse.json({ message: "Missing fields", status: 400 });
    }

    const newPost = new Post({
      content,
      title,
      subtitle,
      date: Date.now(),
    });

    const savedPost = await newPost.save(); // This line saves the new post to the database
    console.log(savedPost);

    return NextResponse.json({ message: "Post created", status: 200 });
  } catch (e: any) {
    console.log(e.message);
    return NextResponse.json({ message: "Error creating post", status: 500 });
  }
}
