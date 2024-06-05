"use client";
import PostCard from "@/components/PostCard";


const postData = [
  {
    image: '/blog/1.jpg',
    category: 'Personal',
    title: 'My journey to becoming a software engineer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/blog/2.png',
    category: 'tech',
    title: 'Next.js vs Gatsby.js: Which one should you choose?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/blog/3.jpeg',
    category: 'tech',
    title: "Don't be a Junior Developer, be a Senior Beginner",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/blog/4.png',
    category: 'tech',
    title: 'What is XSS? Stored Cross Site Scripting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
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




export default function Blog() {

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          <b>Hey Ilyass 👋 Dev here!</b>
        </h2>
        <h3 className="text-center mb-8 mx-auto text-2xl font-bold">
          Discover my stories and thoughts on the latest trends in tech.
        </h3>
        <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-8'>
          {postData.map((post, index) => {
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
