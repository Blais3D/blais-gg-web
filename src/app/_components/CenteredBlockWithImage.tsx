"use client";
import React from "react";
import Typewriter from "./TypeWriter";
import technologies from "./tech";

const CenteredBlockWithImage: React.FC = () => {
  return (
    <div className="relative flex h-[480px] w-[780px] rounded-3xl border-4 border-slate-300 bg-white p-8 shadow-lg">
      <div className="h-max w-max p-6 text-black">
        <h1 className="text-5xl font-thin">
          Hey, My name is Linwood! &#128075;
        </h1>
        <h1 className="text-4xl font-bold">
          <Typewriter words={technologies} />
        </h1>
      </div>
      <div className="absolute bottom-4 right-8 h-1/5 w-8/12 overflow-hidden border-4 border-slate-300"></div>
      <div className="absolute -bottom-8 -left-8 h-1/2 w-[h] overflow-hidden rounded-full border-4 border-slate-300 shadow-md">
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
