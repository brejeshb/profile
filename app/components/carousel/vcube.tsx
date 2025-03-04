'use client';

import React, { useState } from 'react';
import styles from './vcube.module.css';
import { ArrowUp, ArrowDown } from "lucide-react";

// Define images and descriptions for the vertical cube
const images = [
    '/images/image1.jpg',
    '/images/image1.png',
    '/images/image1.jpg',
];

const descriptions = [
    {
        title: "Coursework 1",
        text: `This is a sample coursework project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Aliquid at adipisci repellendus facilis illo, commodi distinctio aut error fugiat ipsam.`
    },
    {
        title: "Coursework 2",
        text: `This is another sample coursework project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet.`
    },
    {
        title: "Coursework 3",
        text: `This is a third sample coursework project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Delectus suscipit amet esse temporibus asperiores mollitia.`
    },
];

const Vcube: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotationX, setRotationX] = useState(0);

    // Handle moving up in the vertical cube (previous item)
    const handleUp = () => {
        setRotationX(prev => prev + 90); // Rotate 90 degrees upward

        // If at the first image, loop back to the last
        setCurrentIndex(prev => {
            if (prev === 0) {
                return images.length - 1; // Loop back to the last image
            } else {
                return prev - 1;
            }
        });
    };

    // Handle moving down in the vertical cube (next item)
    const handleDown = () => {
        setRotationX(prev => prev - 90); // Rotate 90 degrees downward

        // If at the last image, loop back to the first
        setCurrentIndex(prev => {
            if (prev === images.length - 1) {
                return 0; // Loop back to the first image
            } else {
                return prev + 1;
            }
        });
    };

    // Get current description
    const currentDescription = descriptions[currentIndex];

    return (
        <div>
            <h1 className="flex text-6xl font-bold mb-6 justify-center">Academic Work</h1>
            <div className={styles.pageContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{currentDescription.title}</h2>
                    <p className={styles.description}>{currentDescription.text}</p>
                </div>
                <div className={styles.cubeContainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.container}>
                            <div
                                className={styles.imageCube}
                                style={{ transform: `rotateX(${rotationX}deg)` }}
                            >
                                {/* Using fixed position classes for vertical rotation */}
                                <div className={styles.front}>
                                    <img className={styles["wrapper-img"]} src={images[currentIndex % images.length]} alt={`Image ${currentIndex + 1}`} />
                                </div>
                                <div className={styles.top}>
                                    <img className={styles["wrapper-img"]} src={images[(currentIndex - 1 + images.length) % images.length]} alt={`Image ${(currentIndex - 1 + images.length) % images.length + 1}`} />
                                </div>
                                <div className={styles.back}>
                                    <img className={styles["wrapper-img"]} src={images[(currentIndex + 2) % images.length]} alt={`Image ${(currentIndex + 2) % images.length + 1}`} />
                                </div>
                                <div className={styles.bottom}>
                                    <img className={styles["wrapper-img"]} src={images[(currentIndex + 1) % images.length]} alt={`Image ${(currentIndex + 1) % images.length + 1}`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className={styles.dotsContainer}>
                        <div className={styles.dots}>
                            {images.map((_, index) => (
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
                            onClick={handleUp}
                            className={styles.consoleButton}
                            aria-label="Previous slide"
                        >
                            <ArrowUp className="h-4 w-4" />
                        </button>

                        <button 
                            onClick={handleDown}
                            className={styles.consoleButton}
                            aria-label="Next slide"
                        >
                            <ArrowDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vcube;