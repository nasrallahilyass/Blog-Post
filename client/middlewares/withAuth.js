import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Spinner from '@/components/Spinner';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === 'loading') return; // Do nothing while loading
      if (!session) router.push('/auth'); // Redirect if not authenticated
    }, [session, status, router]);

    if (typeof window === 'undefined' || status === 'loading' || !session) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
