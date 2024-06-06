"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { User, MailIcon, ArrowRightIcon, LockKeyhole } from "lucide-react";

const RegisterForm = () => {
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
      {/* input: confirme Password */}
      <div className="relative flex items-center">
        <Input type="password" id="password" placeholder="Confirm Password" />
        <LockKeyhole className="absolute right-6" size={20} />
      </div>
        <Button className='my-3' type="submit">
             Register Now
          <ArrowRightIcon size={20} color="white" className="ml-3" />
        </Button>
        <div className="flex gap-x-2 justify-center mb-3">
            <p>Already have an account?</p>
            <a href="/login" className="underline uppercase">Login Now</a>
        </div>
    </form>
  );
};

export default RegisterForm;
