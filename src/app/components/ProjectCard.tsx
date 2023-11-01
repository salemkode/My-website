import { Card } from "@components/ui/card";
import { motion, useScroll } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  tags: string[];
  className?: string;
}
const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
  tags,
  className,
}) => {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      className={twMerge("mx-auto flex", className)}
      ref={target}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <a className="flex" href={link} target="_blank">
        <Card className="mx-auto flex overflow-hidden md:min-w-[550px]">
          <div className="group relative flex w-full flex-col-reverse md:flex-row">
            <div className="flex flex-col p-6 md:w-1/2">
              <h1 className="pb-4 text-2xl font-bold">{title}</h1>
              <p className="pb-4">{description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Card className="border-primary p-1 px-3 text-sm" key={tag}>
                    {tag}
                  </Card>
                ))}
              </div>
            </div>
            <Image
              alt="snapcraft downloader project app"
              className="bottom-0 left-1/2 top-0 h-full w-full rounded transition md:absolute md:m-3 md:w-max md:-rotate-2 md:border md:shadow-lg md:group-hover:-rotate-6 md:group-hover:scale-110"
              src={image}
            />
          </div>
        </Card>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
