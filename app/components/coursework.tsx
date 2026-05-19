'use client';
import React, { useState } from 'react';
import Ecube from '../components/carousel/Ecube'; 
import { Button } from './neobrutalism/button'; 
import { FileText, BarChart2, 
  // Briefcase, ExternalLink, Presentation
 } from 'lucide-react';
import Image from 'next/image';

const courseworkData = [
  {
    id: 1,
    title: "Americanomics: Affordability in South Korea",
    type: "Geospatial Research Project",
    tech_stack: [
      "Python",
      "R",
      "Geospatial Analysis",
      "Naver Web Scraping",
      "Statistical Analysis",
      "Data Visualization"
    ],
    text: "I was inspired by random americano prices in South Korea. I investigated and found some interesting conclusions about the state of inequality in South Korea.",
    stats: "1000+ cafes",
    link: "#",
    image: "/images/americanomics.png"
  },
  {
    id: 2,
    title: "SAWL Scholarship Fund Process Digitalisation",
    type: "Six Sigma DMAIC Project (Green Belt)",
    tech_stack: [
      "Six Sigma (DMAIC)",
      "Minitab",
      "Process Mapping",
      "Data Analysis",
      "Dashboard Design"
    ],
    text: "SAWL is a non profit offering pro bono legal services in Singapore. We worked with their scholarship team to sharpen and optimise their processes.",
    stats: "Processing time ↓ 50%",
    link: "#",
    image: "/images/sawl.png"
  }
];

const mod = (n: number, length: number) => ((n % length) + length) % length;

const Coursework: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentIndex((prev) => mod(prev + 1, courseworkData.length));
    } else {
      setCurrentIndex((prev) => mod(prev - 1, courseworkData.length));
    }
  };

  const renderFace = (item: typeof courseworkData[0]) => (
    <div className="relative w-full h-full">
      <Image
        src={item.image} 
        alt={item.title}
        fill={true}
        className="w-full h-full object-cover"
      />

    </div>
  );

  const currentItem = courseworkData[currentIndex];

  return (
    <div className="min-h-screen py-16 px-8">
      <h1 className="text-6xl font-black text-center mb-16 uppercase">
        Coursework
      </h1>
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content (Mirrored Layout) */}
        <div className="flex flex-col gap-6 border-4 border-black bg-white/80 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Title */}
          <div>
            <h2 className="text-4xl font-black">{currentItem.title}</h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg leading-relaxed">{currentItem.text}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-black text-xl mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {currentItem.tech_stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border-2 border-black text-sm font-bold rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats / Metric */}
          <div className="flex items-center gap-3">
             <BarChart2 className="w-5 h-5" />
             <span className="font-bold text-lg text-green-700 bg-green-100 px-2 border border-green-700">
               {currentItem.stats}
             </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
             <Button
                variant="default"
                onClick={() => window.open(currentItem.link, '_blank')}
              >
                <FileText className="w-4 h-4" />
                View Paper
              </Button>
          </div>
        </div>

        {/* Right: Cube (Vertical Mode) */}
        <div>
          <Ecube
            vertical={true} 
            data={courseworkData}
            currentIndex={currentIndex}
            onNavigate={handleNavigate}
            renderFace={renderFace}
          />
        </div>

      </div>
    </div>
  );
};

export default Coursework;