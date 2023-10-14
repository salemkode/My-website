import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="container flex min-h-[100vh] flex-col justify-center">
      <h2 className="pb-4 text-center text-4xl font-thin">About Me</h2>
      <blockquote className="mx-auto w-5/6 py-8 sm:text-2xl md:text-3xl font-display">
        I began my web development journey with a fascination for crafting
        digital experiences and solving complex problems. I am a strong
        proponent of writing safe, clean code because I believe it leads to more
        robust, maintainable, and efficient applications.
      </blockquote>
    </div>
  );
};

export default AboutSection;
