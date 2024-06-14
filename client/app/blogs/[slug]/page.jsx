"use client"
import { usePathname } from 'next/navigation';

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SinglePost = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const { data: post, error } = useSWR(
    slug ? `http://localhost:5000/api/posts/${slug}` : null,
    fetcher
  );

  if (!slug) return <div>Loading...</div>;

  if (error) return <div>Error loading post: {error.message}</div>;
  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl text-center sm:text-4xl font-bold mb-7 text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <img
        className="w-full h-auto rounded-lg shadow-lg mb-7"
        src={post.image}
        alt={post.title}
      />
      <div
        className="text-lg sm:text-xl text-gray-700 leading-relaxed dark:text-white"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </div>
  );
};

export default SinglePost;
