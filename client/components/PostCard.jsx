import Image from 'next/image';
import { Card, CardHeader } from './ui/card'; 
import { Badge } from './ui/badge';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Description } from '@radix-ui/react-dialog';


const PostCard = ({ post }) => {

  // const truncatedDescription = post.description.split(' ').slice(0, 10).join(' ') + (' ...');
  return (
    <Card className='group overflow-hidden relative' style={{ width: '400px' }}>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-0 shadow-2xl'
            src={post.image}
            width={247}
            height={250}
            alt=''
            priority
          />
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {post.category}
        </Badge>
        <h4 className='h4 mb-1'>{post.title}</h4>
        <p className='text-muted-foreground text-lg line-clamp-2'>{post.description}</p>
        <Link href={`/blogs/${post.slug}`}>
          <Button className='flex items-center justify-center rounded-lg mx-auto my-3'>Extend Blog</Button>
        </Link>

      </div>
    </Card>
  );
   
};

export default PostCard;


 
