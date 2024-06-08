"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { User, MailIcon, ArrowRightIcon, LockKeyhole } from "lucide-react";
import { signIn, useSession } from "next-auth/react";



const LoginForm = () => {
  const router = useRouter();
  const {data, status} = useSession();
  console.log(data, status);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signIn("google");
  };

  if (status === "authenticated") {
    router.push("/blogs");
  }
    

  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input: email */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      {/* input: password */}
      <div className="relative flex items-center">
        <Input type="password" id="password" placeholder="Password" />
        <LockKeyhole className="absolute right-6" size={20} />
      </div>
        <Button className='mt-3' type="submit">
             Login Now
          <ArrowRightIcon size={20} color="white" className="ml-3" />
        </Button>
        <Button className='bg-blue-500' onClick={handleGoogleLogin}>
             Login with Google
          <ArrowRightIcon size={20} color="white" className="ml-3" />
        </Button>
        <div className="flex gap-x-2 justify-center mb-3">
            <p>Don't have an account?</p>
            <a href="/register" className="underline uppercase">Register Here!</a>
        </div>
    </form>
  );
};

export default LoginForm;
