import Link from "next/link";

//next hook
import { usePathname } from "next/navigation";

//framer motion
import { motion } from "framer-motion";
const links = [
  { name: "Home", path: "/" },
  { name: "My Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
            {link.path === path && 
                <motion.span 
                  className={`block w-full h-1 bg-primary ${underlineStyles}`} 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ type: "tween", duration: 0.5 }} 
                ></motion.span>
            }
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
