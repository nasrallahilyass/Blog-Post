"use client";
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
import  postDataWithSlugs  from '@/data/data';

const SinglePost = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const post = postDataWithSlugs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.description}</p>
    </div>
  );
};

export default SinglePost;
