"use client"
import { usePathname } from 'next/navigation';
import format from "date-fns/format";


import useSWR from "swr";
import Spinner from '@/components/Spinner';

const fetcher = (url) => fetch(url).then((res) => res.json());

const SinglePost = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const { data: post, error } = useSWR(
    slug ? `http://localhost:5000/api/posts/${slug}` : null,
    fetcher
  );

  if (!slug) return <Spinner />;

  if (error) return <div>Error loading post: {error.message}</div>;
  if (!post) return <Spinner />;

  const formattedDate = format(new Date(post.createdAt), "MMMM dd, yyyy");


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
      <div className="flex justify-between items-center mb-7">
        <span className="text-gray-800 dark:text-white font-semibold">By: {post.user.name}</span>
        <span className="text-gray-600 dark:text-gray-300">{formattedDate}</span>
      </div>
      <div
        className="text-lg sm:text-xl text-gray-700 leading-relaxed dark:text-white"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </div>
  );
};

export default SinglePost;
