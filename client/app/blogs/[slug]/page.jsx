"use client";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
// import { useState } from "react";
import postDataWithSlugs from "@/data/data";
// import { Button } from "@/components/ui/button";

const SinglePost = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const post = postDataWithSlugs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }
  
  // const [comment, setComment] = useState('');

  // const handleCommentChange = (e) => {
  //   setComment(e.target.value);
  // };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 ">
      <h1 className="text-3xl text-center sm:text-4xl font-bold mb-7 text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <img
        className="w-full h-auto rounded-lg shadow-lg mb-7"
        src={post.image}
        alt={post.title}
      />
      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed dark:text-white">
        {post.description}
      </p>

      {/* <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form className="mb-4">
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            placeholder="Add a comment"
          />
          <Button className="rounded-md">
            Submit
          </Button>
        </form>
      </div> */}
    </div>
  );
};

export default SinglePost;
