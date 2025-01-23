"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/components/Shared/LoadingSpinner/LoadingSpinner";

const BlogDetails = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await res.json();
        setPost(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchPost();
  }, [id]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        <p>Error: {error}</p>
        <Link className="text-blue-500 underline mt-4 inline-block" href="/">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
      </h1>
      
      {/* Blog Body */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {post.body}
      </p>
  
      {/* Back Button */}
      <Link
        href="/"
        className="inline-block bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  </div>
  
  );
};

export default BlogDetails;
