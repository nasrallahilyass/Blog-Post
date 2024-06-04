"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import PostCard from "@/components/PostCard";
import { useState } from "react";


const postData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  // {
  //   image: '/work/4.png',
  //   category: 'react js',
  //   name: 'Solstice Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/2.png',
  //   category: 'next js',
  //   name: 'Lumina Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/1.png',
  //   category: 'next js',
  //   name: 'Evolve Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/3.png',
  //   category: 'next js',
  //   name: 'Ignite Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/4.png',
  //   category: 'next js',
  //   name: 'Envision Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/1.png',
  //   category: 'fullstack',
  //   name: 'Serenity Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/3.png',
  //   category: 'fullstack',
  //   name: 'Nova Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/2.png',
  //   category: 'fullstack',
  //   name: 'Zenith Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
];

// remove category duplicates
const uniqueCategories = [
  'all posts',
  ...new Set(postData.map((item) => item.category)),
];


export default function Blog() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all posts');

  const filteredPosts = postData.filter((post) => {
    // if category is 'all posts' return all posts, else filter by category
    return category === 'all posts'
      ? post
      : post.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          <b>Hey Ilyass 👋 Dev here!</b>
        </h2>
        <h3 className="text-center mb-8 mx-auto text-2xl font-bold">
          Discover my stories and thoughts on the latest trends in tech.
        </h3>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredPosts.map((post, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <PostCard post={post} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
