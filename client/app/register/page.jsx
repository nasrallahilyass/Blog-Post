import React from "react";
// components
import RegisterForm from "@/components/RegisterForm";
const register = () => {
  return (
    <section>
      <div className="container mx-auto lg:flex lg:justify-center xl:flex xl:justify-center mb-36">
        {/* text */}
        <div className="flex flex-col justify-center lg:w-1/2 xl:w-1/2">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Welcome Again 👋
          </div>
          <h1 className="h1 max-w-md mb-8">
            Register now, and start creating your blogs
          </h1>
          <p className="subtitle max-w-[400px]">
            Discover my tech blogs and become a part of a vibrant community
            dedicated to exploring the latest in technology! Dive into
            insightful articles, expert opinions, and hands-on tutorials that
            cover a wide range of topics.
          </p>
        </div>
        {/* form */}
        <div className="w-full lg:w-1/2 lg:flex justify-center items-center">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default register;
