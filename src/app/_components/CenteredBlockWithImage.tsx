"use client";
import React from "react";
import Typewriter from "./TypeWriter";
import technologies from "./tech";

const CenteredBlockWithImage: React.FC = () => {
  return (
    <div className="relative flex h-1/2 w-2/5 flex-col rounded-3xl border-4 border-slate-300 bg-white p-8 shadow-lg">
      <div className="h-2/3 w-5/6 p-6 text-black">
        <h1 className="text-2xl font-bold">
          Hey, My name is Linwood! &#128075;
        </h1>
        <h1 className="text-lg">
          <Typewriter words={technologies} />
        </h1>
      </div>
      <div className="h-1/3 w-5/6"></div>
      <div className="absolute -right-8 -top-12 h-1/2 overflow-hidden rounded-full border-4 border-slate-300 shadow-lg">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHbO2LW46wq8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711684509376?e=1730937600&v=beta&t=Go1Z2U_44Mnw14z3PQKLN4Q1CU6maL5WKmI8AZa99K8" // Replace with your image source
          alt="This is meant to be a picture of me :("
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CenteredBlockWithImage;
