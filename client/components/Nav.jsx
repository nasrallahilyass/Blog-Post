// link (next js)
import Link from 'next/link';

// next hooks
import { usePathname } from 'next/navigation';

// framer motion
import { motion } from 'framer-motion';

// next-auth
import { useSession } from 'next-auth/react';

// user component
import { User } from './User';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/blogs', name: 'my Blogs' },
  { path: '/contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  const { data: session, status } = useSession();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='underline'
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
      {status === 'authenticated' ? (
        <User />
      ) : (
        <Link href="/auth" className={`capitalize ${linkStyles}`}>
          auth
        </Link>
      )}
    </nav>
  );
};

export default Nav;
