import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', updateScrollProgress);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return completion;
}

export default useScrollProgress;