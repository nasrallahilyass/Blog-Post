import { slugify } from "@/utils/slugify";



// Desc: Data for the blog posts
// files: blogs folder, components/PostCard.jsx
export const postData = [
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
    }
  ];
  
  // Add slugs to each post dynamically
const postDataWithSlugs = postData.map(post => ({
    ...post,
    slug: slugify(post.title)
  }));


export default postDataWithSlugs;