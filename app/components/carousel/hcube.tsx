'use client';

import React, { useState } from 'react';
import styles from './hcube.module.css';
import { ArrowLeft, ArrowRight, Github, ExternalLink, FileText, Trophy } from "lucide-react";
import { Badge } from '../neobrutalism/badge';

// Define projects as a single array of objects that include both image and description
const projects = [
    {
        image: '/images/SGBuddy.png',
        title: "SGBuddy",
        tech_stack: ["Vue", "Python", "Weaviate Vector store", "FirebaseDB", "OpenAI model", "Google Maps API"],
        text: "Generative AI Self Guided Audio Tour. SG Buddy is a state of the art GenAI audio tour provider. It is able to generate audio tours anywhere within Singapore, provide users with an interactive and unrestricted experience, and offer an interactive map to showcase different landmarks around the user depending on location.",
        slides_link: "https://www.canva.com/design/DAGcv40LD4k/H05EBYVrW-RG1OuBhPiM3g/view?utm_content=DAGcv40LD4k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3c7db4f3f6",
        award: "Hack for Cities Finalist",
        deployment: "https://ggdotcom.vercel.app/",
        github: "https://github.com/Quekzhengseng/ggdotcom"
    },
    {
        image: '/images/InfoCrimeWatch.png',
        title: "Info Crime Watch MVP",
        tech_stack: ["Web Scraping", "Azure", "TavilyAPI", "Azure CV", "Speech to Text", "Dashboarding & Graphing"],
        text: "Our solution combines detection and attribution to misinformation. It allows multimodal (Text, Image, Video & Audio) analysis of information from any source on the internet. Solution also entails attribution of origin of misinformation.",
        slides_link: "https://www.canva.com/design/DAGRp7IDpy4/csXlO5H6VZTwmLu7UF1j8A/view?utm_content=DAGRp7IDpy4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd5b530f4c2",
        award: "HacX Hackathon Finalist and Track Winner",
        deployment: "",
        github: "https://github.com/Siyan-G/HacX-Hackathon"
    },
    {
        image: '/images/TraveLite.png',
        title: "TraveLite",
        tech_stack: ["React", "Ethereum", "Web3", "Solidity"],
        text: "TraveLite is an X to Earn solution that incentivises users to reduce the use of Single use plastics while travelling. Through engaging with TraveLite, users can earn VeBetterDao B3TR Tokens. Empowering sustainable tourism one token at a time.",
        slides_link: "https://www.canva.com/design/DAGQubc6qHU/xGKsJsRaHqqqhkC8IrNXJA/view?utm_content=DAGQubc6qHU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc8507d524e",
        award: "EasyA Hackathon Finalist",
        deployment: "",
        github: ""
    },
    {
        image: '/images/Valueteer.png',
        title: "ValueTeer",
        tech_stack: ["Django", "LinkedIn API", "OpenAI"],
        text: "Valueteer is a skill based matchmaking platform to connect volunteer organisations with volunteers. This can enable volunteer organisations to better serve their communities.",
        slides_link: "https://www.canva.com/design/DAGGOq874g8/jBE2PnhnDconcHR0nrUSOg/view?utm_content=DAGGOq874g8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h42fd5c08e2",
        award: "",
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
    },
];

const Hcube: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    const handleNext = () => {
        setRotationY(prev => prev - 90); // Rotate 90 degrees clockwise

        // If at the last image, loop back to the first
        setCurrentIndex(prev => {
            if (prev === projects.length - 1) {
                return 0; // Loop back to the first project
            } else {
                return prev + 1;
            }
        });
    };

    // Simple rotation logic for prev
    const handlePrev = () => {
        setRotationY(prev => prev + 90); // Rotate 90 degrees counterclockwise

        // If at the first image, loop back to the last
        setCurrentIndex(prev => {
            if (prev === 0) {
                return projects.length - 1; // Loop back to the last project
            } else {
                return prev - 1;
            }
        });
    };

    // Get current project
    const currentProject = projects[currentIndex];

    return (
        <div className="grid-bg">
            <h1 className="flex text-6xl font-bold mb-6 justify-center">Projects</h1>
            <div className={styles.pageContainer}>
                <div className={styles.cubeContainer}>
                    {/* Modified wrapper to 16:9 ratio */}
                    <div className={`${styles.wrapper} !w-[400px] !h-[225px]`}>
                        <div className={styles.container}>
                            <div
                                className={`${styles.imageCube} !w-[400px] !h-[225px]`}
                                style={{ transform: `rotateY(${rotationY}deg)` }}
                            >
                                {/* Adjust all cube faces to 16:9 ratio */}
                                <div className={`${styles.front} !w-[400px] !h-[225px]`}>
                                    <img className={styles["wrapper-img"]} src={projects[currentIndex % projects.length].image} alt={`Image ${currentIndex + 1}`} />
                                </div>
                                <div className={`${styles.right} !w-[400px] !h-[225px]`}>
                                    <img className={styles["wrapper-img"]} src={projects[(currentIndex + 1) % projects.length].image} alt={`Image ${(currentIndex + 1) % projects.length + 1}`} />
                                </div>
                                <div className={`${styles.back} !w-[400px] !h-[225px]`}>
                                    <img className={styles["wrapper-img"]} src={projects[(currentIndex + 2) % projects.length].image} alt={`Image ${(currentIndex + 2) % projects.length + 1}`} />
                                </div>
                                <div className={`${styles.left} !w-[400px] !h-[225px]`}>
                                    <img className={styles["wrapper-img"]} src={projects[(currentIndex - 1 + projects.length) % projects.length].image} alt={`Image ${(currentIndex - 1 + projects.length) % projects.length + 1}`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className={styles.dotsContainer}>
                        <div className={styles.dots}>
                            {projects.map((_, index) => (
                                <span
                                    key={index}
                                    className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                                ></span>
                            ))}
                        </div>
                    </div>

                    {/* Console-style buttons */}
                    <div className={styles.btns}>
                        <button
                            onClick={handlePrev}
                            className={styles.consoleButton}
                            aria-label="Previous slide"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </button>

                        <button
                            onClick={handleNext}
                            className={styles.consoleButton}
                            aria-label="Next slide"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] w-full">
                        <h2 className="text-3xl font-bold mb-4 border-b-4 border-black pb-2">{currentProject.title}</h2>
                        
                        <p className="mb-6 text-lg">{currentProject.text}</p>
                        
                        {currentProject.tech_stack && currentProject.tech_stack.length > 0 && (
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {currentProject.tech_stack.map((tech, index) => (
                                        <Badge key={index} variant="default" className="bg text-white border-black">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {currentProject.award && (
                            <div className="flex items-center mb-4">
                                <Trophy className="h-5 w-5 mr-2" />
                                <span className="font-bold">{currentProject.award}</span>
                            </div>
                        )}
                        
                        <div className="flex flex-wrap gap-3 mt-4">
                            {currentProject.slides_link && (
                                <a 
                                    href={currentProject.slides_link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="consoleButton"
                                >
                                    <FileText className="h-5 w-5 mr-2" />
                                    Slides
                                </a>
                            )}
                            
                            {currentProject.github && (
                                <a 
                                    href={currentProject.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="consoleButton"
                                >
                                    <Github className="h-5 w-5 mr-2" />
                                    GitHub
                                </a>
                            )}
                            
                            {currentProject.deployment && (
                                <a 
                                    href={currentProject.deployment} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="consoleButton"
                                >
                                    <ExternalLink className="h-5 w-5 mr-2" />
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CSS for grid background */}
            <style jsx>{`
                .grid-bg {
                    background-size: 20px 20px;
                    background-image: linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                                      linear-gradient(to bottom, #e5e5e5 1px, transparent 1px);
                }
                .consoleButton {
                    background-color: white;
                    padding: 12px 24px;
                    border: 4px solid black;
                    font-weight: bold;
                    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.8);
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .consoleButton:hover {
                    transform: translate(-1px, -1px);
                    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.8);
                }
                .consoleButton:active {
                    transform: translate(2px, 2px);
                    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8);
                }
            `}</style>
        </div>
    );
};

export default Hcube;