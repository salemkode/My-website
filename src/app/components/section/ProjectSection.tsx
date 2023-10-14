"use client";
import React, { useState } from "react";
import ProjectCard from "../ProjectCard";

// Images for projects
import SnapCraftImage from "@assets/images/projects/snapcraft.png";
import ExplorerImage from "@assets/images/projects/explorer.png";
import FastStarterImage from "@assets/images/projects/faststarter.png";
import SlpUploaderImage from "@assets/images/projects/slp-uploader.png";

const ProjectSection: React.FC = () => {
  const [projects] = useState([
    {
      title: "Snapcraft Downloader",
      description: "A simple GUI website to download snapcraft packages files.",
      image: SnapCraftImage,
      link: "https://snap.salemkode.com/",
      tags: ["ReactJs", "Bootstrap"],
    },
    {
      title: "Bitcoin cash explorer",
      description:
        "A simple explorer for bitcoin cash blockchain supporting tokens.",
      image: ExplorerImage,
      link: "https://explorer.salemkode.com/",
      tags: ["VueJs", "Typescript"],
    },
    {
      title: "Slp Icon uploader",
      description:
        "Streamlined token icon upload and formatting tool to Github.",
      image: SlpUploaderImage,
      link: "https://slp-icons.salemkode.com/",
      tags: ["NodeJs", "Github API"],
    },
    {
      title: "FastStarter",
      description:
        "A simple explorer for bitcoin cash blockchain supporting tokens.",
      image: FastStarterImage,
      link: "https://faststarter.salemkode.com/",
      tags: ["VueJs", "Solidity"],
    },
  ]);
  return (
    <div className="container flex min-h-[90vh] flex-col justify-center">
      <h2 className="pb-4 text-center text-4xl font-thin">Projects</h2>
      <div className="mx-auto grid w-max gap-2 pt-3 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.link} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
