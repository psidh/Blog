"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = async () => {
    try {
      toast.loading("Posting...");
      const response = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify({ title, subtitle, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      toast.dismiss();
      toast.success("Post submitted successfully!");
      setTitle("");
      setContent("");
      setSubtitle("");
    } catch (error) {
      console.error("Failed to submit post:", error);
      toast.dismiss();
      toast.error("Failed to submit post.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Toaster />
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      <h2 className="text-xl font-semibold mb-4">Create a new post</h2>
      <input
        type="text"
        title="title"
        className="w-3/4 mb-6 p-4 bg-neutral-900 rounded-lg focus:outline-none"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        title="subtitle"
        className="w-3/4 mb-6 p-4 bg-neutral-900 rounded-lg focus:outline-none"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <textarea
        className="w-3/4 h-60 p-4 bg-neutral-900 rounded-lg focus:outline-none"
        placeholder="Write your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="mt-4 px-12 cursor-pointer py-2 bg-neutral-800 hover:bg-neutral-700 font-semibold rounded"
        onClick={handlePost}
        disabled={!title || !content}
      >
        Post
      </button>
    </div>
  );
}
