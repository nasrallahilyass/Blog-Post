import { slugify } from "@/utils/slugify";

// Desc: Data for the blog posts
// files: blogs folder, components/PostCard.jsx
export const postData = [
  {
    image: "/blog/1.jpg",
    category: "Personal",
    title: "My journey to becoming a software engineer",
    description:
      "My journey to becoming a software engineer has been filled with challenges and achievements. From learning the basics of coding to mastering complex algorithms, every step has been a learning experience. I started with small projects and gradually took on more complex ones, which helped me build a strong foundation. The support from the developer community and constant practice played crucial roles in my growth. Today, I continue to learn and grow, keeping up with the latest trends and technologies in the field.",
    link: "/",
    github: "/",
  },
  {
    image: "/blog/2.png",
    category: "tech",
    title: "Next.js vs Gatsby.js: Which one should you choose?",
    description:
      "Choosing between Next.js and Gatsby.js depends on your project's needs. Next.js offers server-side rendering and is ideal for dynamic sites with frequent updates. It's a great choice for e-commerce, dashboards, and applications where real-time data is crucial. Gatsby.js, on the other hand, excels at static site generation and is perfect for blogs, portfolio sites, and static documentation where performance and SEO are top priorities. Understanding the strengths and use cases of each framework can help you make an informed decision.",
    link: "/",
    github: "/",
  },
  {
    image: "/blog/3.jpeg",
    category: "tech",
    title: "Don't be a Junior Developer, be a Senior Beginner",
    description:
      "The mindset of a senior beginner can transform your career as a developer. Instead of feeling overwhelmed by what you don't know, focus on what you can learn next. This approach encourages continuous learning and growth. Embrace challenges and seek mentorship to accelerate your progress. Remember, it's not about how much you know now, but about your willingness to learn and adapt. With this mindset, you'll quickly find yourself advancing from junior to senior levels in your development career.",
    link: "/",
    github: "/",
  },
  {
    image: "/blog/4.png",
    category: "tech",
    title: "What is XSS? Stored Cross Site Scripting",
    description:
      "Stored Cross Site Scripting (XSS) is a type of security vulnerability that allows attackers to inject malicious scripts into web applications. These scripts can be stored in the server and executed whenever a user accesses the compromised part of the application. Understanding XSS is crucial for developers as it helps in securing applications against such attacks. Implementing proper input validation and output encoding are some of the key practices to prevent XSS. Educating yourself and your team about these practices is essential to maintain the security of web applications.",
    link: "/",
    github: "/",
  },
];

// Add slugs to each post dynamically
const postDataWithSlugs = postData.map((post) => ({
  ...post,
  slug: slugify(post.title),
}));

export default postDataWithSlugs;
