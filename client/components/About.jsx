"use client";

import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'ILYASS NASRALAH',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+212 6 01 28 45 16',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'ilyass.nasralah@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: '17.07.2000',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor of cyber security',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Casablanca, Morocco',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'School Abderrahmane Belkorchi',
        qualification: 'High School Diploma',
        years: '2018',
      },
      {
        university: 'ENSET Mohammedia University',
        qualification: 'Bachelor of Cyber Security',
        years: '2023 - 2024',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Outsourcia',
        role: 'After Sales Service Agent',
        years: '2021 - 2023',
      },
      {
        company: 'ARX-X Factory',
        role: 'Fullsatck Developer',
        years: 'Jul 2023 - Dec 2023',
      }
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'Programming Languages:',
      },
      {
        tech: 'JavaScript, TypeScript, Python',
        
      },
      {
        name: 'Front-end Development:',
      },
      {
        tech: 'HTML, CSS, React.js, Next.js, Tailwindcss',
        
      },
      {
        name: 'Back-end Development:',
      },
      {
        tech: 'Node.js, Express.js, MongoDB,MySQL, Firebase, RESTful API, GraphQL, JWT',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/javascript.svg',
      },
      {
        imgPath: '/about/typescript.svg',
      },
      {
        imgPath:'/about/nodejs.svg',
      },
      {
        imgPath: '/about/mongodb.svg',
      },
      {
        imgPath: '/about/firebase.svg',
      },
      {
        imgPath: '/about/graphql.svg',
      }
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Passionate Full Stack:
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    My name is ILYASS NASRALLAH, I'm 23 years old. I am a passionate Full Stack JavaScript developer. I have strong communication and adaptability skills, and I am highly motivated to take on new challenges...
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary text-xl font-bold mb-3'>Language Skill:</div>
                      <div className='border-b  border-border'></div>
                      <div><span className='font-bold text-2xl'>. </span>Mother Tongue is <span className='font-bold'>Arabic</span></div>
                      <div><span className='font-bold text-2xl'>. </span>Fluent in <span className='font-bold'>ENGLISH</span>  </div>
                      <div><span className='font-bold text-2xl'>. </span>Proficient in  <span className='font-bold'>Deutsch and Spanich</span></div>
                      <div><span className='font-bold text-2xl'>. </span>Conversant in <span className='font-bold'>French</span></div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday As A Developer?</h3>
                    {/* skills */}
                    <div className='mb-12'>
                      <h4 className='text-3xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name, tech } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-2'
                                key={index}
                              >
                                <div className='font-bold '>
                                  {name}
                                  <div className='font-medium'>{tech}</div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      {/* <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4> */}
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
