'use client';
import React from 'react';
import ProjectsSwipe from './projectswiper';

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    {
      imageUrl: '/images/project1.jpg', // Replace with your actual image path
      title: 'E-Commerce Platform',
      description: 'An opportunity to explore modern e-commerce solutions with Next.js, featuring comprehensive product management, user authentication, and secure payment processing with Stripe integration.',
      buttonText: 'View Project',
      buttonLink: 'https://example.com/project1'
    },
    {
      imageUrl: '/images/project2.jpg',
      title: 'Portfolio Website',
      description: 'A showcase of design and development expertise built with React and Framer Motion. This responsive portfolio website features smooth animations and transitions to create an engaging user experience.',
      buttonText: 'View Live',
      buttonLink: 'https://example.com/project2'
    },
    {
      imageUrl: '/images/project3.jpg',
      title: 'Mobile Fitness App',
      description: 'A React Native fitness application that helps users track workouts, monitor progress, and receive personalized training recommendations based on individual goals and performance metrics.',
      buttonText: 'See Details',
      buttonLink: 'https://example.com/project3'
    },
    {
      imageUrl: '/images/project4.jpg',
      title: 'AI Content Generator',
      description: 'An innovative web application leveraging AI to generate custom content for marketing campaigns, blogs, and social media. Built with Next.js and integrated with OpenAI API for intelligent content creation.',
      buttonText: 'Try Demo',
      buttonLink: 'https://example.com/project4'
    }
  ];

  return (
    <main>
      <ProjectsSwipe projects={projects} />
    </main>
  );
}