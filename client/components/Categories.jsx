import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories");
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const getCategoryBackgroundColor = (index) => {
    const colors = ["bg-red-300", "bg-green-300", "bg-blue-300", "bg-orange-300", "bg-purple-300"];
    return colors[index % colors.length];
  };

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
