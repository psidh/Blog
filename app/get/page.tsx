"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/blog");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="px-20">
      {posts.map((post: any) => (
        <div key={post._id}>
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <h2 className="text-xl font-semibold text-neutral-600 my-2">{post.subtitle}</h2>
          <pre>{post.content}</pre>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
