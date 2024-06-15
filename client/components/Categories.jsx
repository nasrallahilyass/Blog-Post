import useSWR from 'swr';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Spinner from './Spinner';

const fetcher = url => fetch(url).then(res => res.json());

const Categories = () => {
  const { data: categories, error } = useSWR('http://localhost:5000/api/categories', fetcher);

  const getCategoryBackgroundColor = (index) => {
    const colors = ["bg-red-300", "bg-green-300", "bg-blue-300", "bg-orange-300", "bg-purple-300"];
    return colors[index % colors.length];
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!categories) return <Spinner />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 mb-5">
      {categories.map((category, index) => (
        <div key={index} className={`flex justify-center items-center rounded-lg gap-x-3 p-4 w-full ${getCategoryBackgroundColor(index)}`}>
          <Avatar>
            <AvatarFallback>{category.title}</AvatarFallback>
            <AvatarImage src={category.image} alt={category.title} />
          </Avatar>
          <div className="text-center font-semibold capitalize">
            {category.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
