'use client';
import React, { useState } from 'react';
import Ecube from './carousel/Ecube';
import { Button } from './neobrutalism/button';
import { Github, ExternalLink, FileText, Award } from 'lucide-react';
import Image from 'next/image';
const projects = [
  {
    image: '/images/SGBuddy.png',
    title: "SGBuddy",
    tech_stack: ["Vue", "Python", "Weaviate Vector store", "FirebaseDB", "OpenAI model", "Google Maps API"],
    text: "Generative AI Self Guided Audio Tour. SG Buddy is a state of the art GenAI audio tour provider. It is able to generate audio tours anywhere within Singapore, provide users with an interactive and unrestricted experience, and offer an interactive map to showcase different landmarks around the user depending on location.",
    slides_link: "https://www.canva.com/design/DAGcv40LD4k/H05EBYVrW-RG1OuBhPiM3g/view",
    award: "Hack for Cities Finalist",
    deployment: "https://ggdotcom.vercel.app/",
    github: "https://github.com/Quekzhengseng/ggdotcom"
  },
  {
    image: '/images/InfoCrimeWatch.png',
    title: "Info Crime Watch MVP",
    tech_stack: ["Web Scraping", "Azure", "TavilyAPI", "Azure CV", "Speech to Text", "Dashboarding & Graphing"],
    text: "Our solution combines detection and attribution to misinformation. It allows multimodal (Text, Image, Video & Audio) analysis of information from any source on the internet. Solution also entails attribution of origin of misinformation.",
    slides_link: "https://www.canva.com/design/DAGRp7IDpy4/csXlO5H6VZTwmLu7UF1j8A/view",
    award: "HacX Hackathon Finalist and Track Winner",
    deployment: "",
    github: "https://github.com/Siyan-G/HacX-Hackathon"
  },
  {
    image: '/images/TraveLite.png',
    title: "TraveLite",
    tech_stack: ["React", "Ethereum", "Web3", "Solidity"],
    text: "TraveLite is an X to Earn solution that incentivises users to reduce the use of Single use plastics while travelling. Through engaging with TraveLite, users can earn VeBetterDao B3TR Tokens. Empowering sustainable tourism one token at a time.",
    slides_link: "https://www.canva.com/design/DAGQubc6qHU/xGKsJsRaHqqqhkC8IrNXJA/view",
    award: "EasyA Hackathon Finalist",
    deployment: "",
    github: ""
  },
  {
    image: '/images/Valueteer.png',
    title: "ValueTeer",
    tech_stack: ["Django", "LinkedIn API", "OpenAI"],
    text: "Valueteer is a skill based matchmaking platform to connect volunteer organisations with volunteers. This can enable volunteer organisations to better serve their communities.",
    slides_link: "https://www.canva.com/design/DAGGOq874g8/jBE2PnhnDconcHR0nrUSOg/view",
    award: "1st Runner Up HackSingapore",
    deployment: "",
    github: ""
  },
  {
    image: '/images/bia.png',
    title: "SMUBIA Website Revamp",
    tech_stack: ["Next.js", "Tailwind CSS", "Typescript"],
    text: "Singapore Management University Business Intelligence Analytics club website was recently revamped and I had the opportunity to contribute to the redesign and development. The website now uses a sleek modern design that matches with our brand colours and encapsulates our key offerings.",
    slides_link: "",
    award: "",
    deployment: "https://www.smubia.com",
    github: "https://github.com/SMUBIA-github/bia-website"
  }
];

const mod = (n: number, length: number) => ((n % length) + length) % length;

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentIndex((prev) => mod(prev + 1, projects.length));
    } else {
      setCurrentIndex((prev) => mod(prev - 1, projects.length));
    }
  };

  const renderFace = (project: typeof projects[0]) => (
    <Image src={project.image} alt={project.title} fill={true} />
  );

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen py-16 px-8">
      <h1 className="text-6xl font-black text-center mb-16">Projects</h1>
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Cube */}
        <div>
          <Ecube
            data={projects}
            currentIndex={currentIndex}
            onNavigate={handleNavigate}
            renderFace={renderFace}
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6
        border-4 border-black bg-white/80 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        ">
          {/* Title */}
          <div className="">
            <h2 className="text-4xl font-black">{currentProject.title}</h2>
          </div>

          {/* Description */}
          <div className="">
            <p className="text-lg leading-relaxed">{currentProject.text}</p>
          </div>

          {/* Tech Stack */}
          <div className="">
            <h3 className="font-black text-xl mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {currentProject.tech_stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border-2 border-black text-sm font-bold rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Award */}
          {currentProject.award && (
            <div className=" flex items-center gap-3">
              <Award className="w-5 h-5" />
              <span className="font-bold">{currentProject.award}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {currentProject.slides_link && (
              <Button
                variant="default"
                onClick={() => window.open(currentProject.slides_link, '_blank')}
              >
                <FileText className="w-4 h-4" />
                Slides
              </Button>
            )}
            {currentProject.github && (
              <Button
                variant="default"
                onClick={() => window.open(currentProject.github, '_blank')}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            )}
            {currentProject.deployment && (
              <Button
                variant="default"
                onClick={() => window.open(currentProject.deployment, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;