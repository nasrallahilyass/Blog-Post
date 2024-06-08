import React from "react";
// components
import LoginForm from "@/components/LoginForm";
const Login = () => {
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
        {/* form */}
        <div className="w-full lg:w-1/2 lg:flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
