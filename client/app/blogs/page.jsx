"use client";
import PostCard from "@/components/PostCard";
import  postDataWithSlugs  from "@/data/data";


export default function Blog() {

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
          Recent Posts:
        </h3>

        <div className='text-lg gap-y-5 xl:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-8'>
          {postDataWithSlugs.map((post, index) => {
            return (
              <div key={index} className="flex justify-center">
                <PostCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
