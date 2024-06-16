'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

//metadata:
// export const metadata = {
//   title: 'Projects',
// }

const projectData = [
  {
    image: '/work/1.png',
    category: 'reactjs js',
    name: 'Ecom Website',
    description:
      'Using React, Redux, Firebase, and Stripe API, I built an e-commerce website with full functionality like adding items to the cart, checkout, and payment processing.',
    link: 'https://morocco-book.netlify.app/checkout',
    github: 'https://github.com/nasrallahilyass/my-EcommerceWebsite',
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Blog Website',
    description:
      'Using Next.js, MongoDb, ExpressJS, ... I built a blog website with full functionality like creating, updating, and deleting posts, and user authentication.',
    link: '/',
    github: '/',
  }
];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
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
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
