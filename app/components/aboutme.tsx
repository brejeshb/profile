import React from 'react';
import ImageCard from './neobrutalism/image-card';
import { Card, CardContent, CardHeader, CardTitle } from './neobrutalism/card';

const AboutMe = () => {
  return (
    <section className="max-w-7xl mx-auto p-8">
      {/* Hero Section */}
      <div className="relative mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-6">
            Hi, I&apos;m
              <span className="block text-8xl mt-2">Brejesh</span>
            </h1>
            <div className="bg-main p-6 border-4 border-border shadow-light max-w-xl">
              <p className="text-xl mb-4">
                I create amazing digital experiences with a focus on user-centered design
              </p>
              <button className="bg-white px-8 py-3 border-4 border-border font-bold shadow-light hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
              Let&apos;s Connect
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 bg-[#FF90E8] p-4 border-4 border-border shadow-light z-10 rotate-6">
              Available for projects
            </div>
            <ImageCard 
              imageUrl="/images/profile.png"
              isRounded={true}
            />
          </div>
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute top-20 left-0 w-12 h-12 bg-[#93DEFF] border-4 border-border rotate-12" /> */}
        <div className="absolute bottom-0 right-20 w-8 h-8 bg-[#FF90E8] border-4 border-border -rotate-12" />
      </div>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">What I Do</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Education', 'Experience', 'Interests '].map((skill) => (
              <div key={skill} className="bg-white p-6 border-4 border-border shadow-light hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-3">{skill}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutMe; 