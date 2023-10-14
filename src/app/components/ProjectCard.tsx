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
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={target}
    >
      <a className="flex" target="_blank" href={link}>
        <Card className="mx-auto flex min-w-[500px] overflow-hidden">
          <div className="group relative flex w-full">
            <div className="flex w-1/2 flex-col p-6">
              <h1 className="pb-4 text-2xl font-bold">{title}</h1>
              <p className="pb-4">{description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Card key={tag} className="border-primary p-1 px-3 text-sm">
                    {tag}
                  </Card>
                ))}
              </div>
            </div>
            <Image
              src={image}
              alt="snapcraft downloader project app"
              className="absolute bottom-0 left-1/2 top-0 m-3 h-full w-max -rotate-2 rounded border shadow-lg transition group-hover:-rotate-6 group-hover:scale-110"
            />
          </div>
        </Card>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
