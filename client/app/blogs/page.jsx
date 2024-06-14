"use client";
import useSWR from "swr";
import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard"; // Ensure correct import

const fetcher = url => fetch(url).then(res => res.json());

export default function Blog() {
  const { data: posts, error } = useSWR('http://localhost:5000/api/posts', fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!posts) return <div>Loading...</div>;

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          <b>Hey Ilyass 👋 Dev here!</b>
        </h2>
        <h2 className="text-center mb-8 mx-auto text-2xl font-bold">
          Discover my stories and thoughts on the latest trends in tech.
        </h2>
        <h3 className="ml-6 font-bold text-2xl mb-6 underline">
          Categories:
        </h3>
        <Categories/>
        <h3 className="ml-6 font-bold text-2xl mb-6 underline">
          Recent Posts:
        </h3>
        <div className='text-lg gap-y-5 xl:mt-8 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 md:gap-x-5 xl:grid-cols-3 mb-8'>
          {posts.map((post, index) => (
            <div key={index} className="flex justify-center">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
