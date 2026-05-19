'use client';
import React, { useState } from 'react';
import Ecube from '../components/carousel/Ecube'; 
import { Button } from './neobrutalism/button'; 
import { FileText, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const opineData = [
  {
    id: 1,
    title: "Opine",
    type: "AI Native Community Management System",
    tech_stack: [],
    text: "Most communities don't really know who's engaged. Opine fixes that by turning scattered feedback into clear, actionable insight for community managers.",
    stats: "8 pilots · 250+ users · 1000+ interactions",
    image: "/images/opine_overview.png"
  },
  {
    id: 2,
    title: "Telegram Pulse Surveys",
    type: "Feature 01",
        tech_stack: [],
    text: "Short surveys sent straight to Telegram, where members already are. No forms, no friction. Our pilot saw around a 50% jump in response rates.",
    stats: "~50% increase in response rates",
    image: "/images/opine_telegram.png"
  },
  {
    id: 3,
    title: "Organisation Action Board",
    type: "Feature 02",
        tech_stack: [],
    text: "A dashboard that gives you the full picture at a glance. Community sentiment, upcoming events, recent activity, and suggested next steps, all in one place.",
    stats: "Community sentiment scored 0 to 100",
    image: "/images/opine_dashboard.png"
  },
  {
    id: 4,
    title: "Member Analytics",
    type: "Feature 03",
        tech_stack: [],
    text: "See each member's health over time. Spot rising leaders, catch disengaging members early, and match newcomers with senior anchors so no one gets lost in the crowd.",
    stats: "Temporal · Strategic · Granularity",
    image: "/images/opine_analytics.png"
  }
];

const mod = (n: number, length: number) => ((n % length) + length) % length;

const Opine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentIndex((prev) => mod(prev + 1, opineData.length));
    } else {
      setCurrentIndex((prev) => mod(prev - 1, opineData.length));
    }
  };

  const renderFace = (item: typeof opineData[0]) => (
    <div className="relative w-full h-full">
      <Image
        src={item.image}
        alt={item.title}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const currentItem = opineData[currentIndex];

  return (
    <div className="min-h-screen py-16 px-8">
      <h1 className="text-6xl font-black text-center mb-16 uppercase">
        Opine
      </h1>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Content */}
        <div className="flex flex-col gap-6 border-4 border-black bg-white/80 backdrop-blur-sm p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">{currentItem.type}</p>
            <h2 className="text-4xl font-black">{currentItem.title}</h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed">{currentItem.text}</p>
          </div>

          {/* <div>
            <h3 className="font-black text-xl mb-4">Stack / Concepts</h3>
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
          </div> */}

          <div className="flex items-center gap-3">
            <span className="font-bold text-lg text-green-700 bg-green-100 px-2 border border-green-700">
              {currentItem.stats}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="default"
              onClick={() => window.open('/Opine One Page Summary.pdf', '_blank')}
            >
              <FileText className="w-4 h-4" />
              One Pager
            </Button>
            <Button
              variant="default"
              onClick={() => window.open('https://www.opine.asia/community', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </Button>
          </div>

        </div>

        {/* Right: Cube */}
        <div>
          <Ecube
            vertical={false}
            data={opineData}
            currentIndex={currentIndex}
            onNavigate={handleNavigate}
            renderFace={renderFace}
          />
        </div>

      </div>
    </div>
  );
};

export default Opine;