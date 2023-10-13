import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="container flex min-h-[90vh] flex-col justify-center">
      <h2 className="pb-4 text-center text-4xl font-thin">About Me</h2>
      <blockquote className="mx-auto w-5/6 py-8 font-lora text-3xl">
        I began my web development journey with a fascination for crafting
        digital experiences and solving complex problems. I specialize in a
        range of technologies, including React and typescript, and I am a strong
        proponent of writing safe, clean code because I believe it leads to more
        robust, maintainable, and efficient applications. You can explore my
        work on my GitHub. With a deep appreciation for creating intuitive and
        seamless user experiences, I ensure that every line of code I write
        improves user interactions. I believe in the power of technology to
        create positive change and am always excited about the next challenge.
        Feel free to contact me at any time. I look forward to connecting with
        you.
      </blockquote>
    </div>
  );
};

export default AboutSection;
