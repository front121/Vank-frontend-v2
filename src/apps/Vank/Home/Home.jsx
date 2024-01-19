import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  useEffect(() =>{
    navigate("/Auth")
  }, [])

  return (
    <div className="grid h-screen place-items-center bg-white dark:bg-[#14181F] px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Home
      </h1>
    </div>
  );
};

export default Home;
