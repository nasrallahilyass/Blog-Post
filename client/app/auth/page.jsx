"use client";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

//for icons
import { Button } from "components/ui/button";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";


// components
const Login = () => {
  const router = useRouter();
  const {data, status} = useSession();
  console.log(data, status);

  // handle github login
  const handleGithubLogin = (e) => {
    e.preventDefault();
    signIn("github");
  };
  // handle google login
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signIn("google");
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/blogs");
    }
  }
  , [status]);
  
  return (
    <section>
      <div className="container mx-auto lg:flex lg:justify-center xl:flex xl:justify-center my-20">
        {/* text */}
        <div className="flex flex-col justify-center lg:w-1/2 xl:w-1/2">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Welcome Back 👋
          </div>
          <h1 className="h1 max-w-md mb-8">Login Now</h1>
          <p className="subtitle max-w-[400px]">
            Begin shaping your tech blogs, showcasing your knowledge and
            experiences, igniting curiosity, fostering learning, and connecting
            with readers through valuable content and engaging narratives.
          </p>
        </div>
        {/* auth */}
        <div className="w-full lg:w-1/2 lg:flex justify-center items-center">
          <form className="flex flex-col gap-y-4">
            <Button className="mt-3" type="submit" onClick={handleGithubLogin}>
              Login Now Github
              <Github size={20} className="ml-3 text-white dark:text-black" />
            </Button>
            <Button className="bg-blue-500" onClick={handleGoogleLogin}>
              Login with Google
              <FcGoogle size={20} color="white" className="ml-3" />
            </Button>
            <div className="flex gap-x-2 justify-center mb-3">
              <p>Don't have an account?</p>
              <a href="/" className="underline uppercase">
                Register Here!
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
