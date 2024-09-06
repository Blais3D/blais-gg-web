// components/Typewriter.tsx

import React, { useEffect, useState } from "react";

type TypewriterProps = {
  words: { text: string; color: string }[];
  typingSpeed?: number; // milliseconds
  deletingSpeed?: number; // milliseconds
  pauseTime?: number; // milliseconds
};

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [text, setText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(true);

  // Handle the case where words array might be empty
  const currentWord =
    words.length > 0
      ? words[wordIndex % words.length]
      : { text: "", color: "#FFFFFF" };

  useEffect(() => {
    if (words.length === 0) return; // Do nothing if words array is empty

    const handleTyping = () => {
      if (isDeleting) {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (currentWord != undefined && text.length < currentWord.text.length) {
          setText((prev) => currentWord.text.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    currentWord,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    words.length,
  ]);

  useEffect(() => {
    const blinkCursor = setInterval(() => setTyping((prev) => !prev), 500);
    return () => clearInterval(blinkCursor);
  }, []);

  return (
    <div className="w-full">
      <span className="mr-2 inline">
        {
          "I'm a Student at Northeastern University and a Software Engineer that works in"
        }
      </span>
      <span
        style={{ color: currentWord ? currentWord.color : "#000000" }}
        className="mr-2 inline"
      >
        {text}
      </span>
      <span
        className={`mr-2 inline text-black transition-opacity duration-200 ${
          typing ? "opacity-100" : "opacity-0"
        }`}
      >
        |
      </span>
    </div>
  );
};

export default Typewriter;
