"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Button({ children }) {
  const router = useRouter()
  const handleClick = () => {
    router.push("/dashboard/analytics");
  };
  return (
    <>
      <button onClick={handleClick} className="bg-blue-500 px-3 py-3 mt-6 rounded text-gray-50">
        {children}
      </button>
    </>
  );
}

export default Button;
