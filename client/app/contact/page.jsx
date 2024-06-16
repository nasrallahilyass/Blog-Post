import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import ContactForm from '@/components/ContactForm';

//metadata:
export const metadata = {
  title: 'Contact',
}

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together.</h1>
            <p className='subtitle max-w-[400px]'>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.  
            </p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
