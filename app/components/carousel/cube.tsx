'use client';

import React, { useState} from 'react';
import styles from './cube.module.css';
// import { Carousel, CarouselNext, CarouselPrevious, CarouselContent } from '../neobrutalism/carousel';
import { Button } from '../neobrutalism/button';
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define images and descriptions directly in the component file
const images = [
    '/images/table2.png',
    '/images/image1.jpg',
    '/images/table2.png',
    '/images/image1.jpg',
    '/images/table2.png',

];

const descriptions = [
    {
      title: "Project 1",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
             commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
             asperiores mollitia.`
    },
    {
      title: "Project 2",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
             commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
             asperiores mollitia.`
    },
    {
      title: "Project 3",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
             commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
             asperiores mollitia.`
    },
    {
      title: "Project 4",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
             commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
             asperiores mollitia.`
    },
    {
      title: "Project 5",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
             commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
             asperiores mollitia.`
    },
  ];
  


const Cube: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    const handleNext = () => {
        setRotationY(prev => prev - 90); // Rotate 90 degrees clockwise

        // If at the last image, loop back to the first
        setCurrentIndex(prev => {
            if (prev === images.length - 1) {
                return 0; // Loop back to the first image
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
                return images.length - 1; // Loop back to the last image
            } else {
                return prev - 1;
            }
        });
    };
    // Get current description
    const currentDescription = descriptions[currentIndex];

    return (
        <div>
        <h1 className="flex text-6xl font-bold mb-6 justify-center">Projects</h1>
        <div className={styles.pageContainer}>
            <div className={styles.cubeContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div
                            className={styles.imageCube}
                            style={{ transform: `rotateY(${rotationY}deg)` }}
                        >
                            {/* Using fixed position classes as requested */}
                            <div className={styles.front}>
                                <img className={styles[`wrapper-img`]} src={images[currentIndex % images.length]} alt={`Image ${currentIndex + 1}`} />
                            </div>
                            <div className={styles.right}>
                                <img className={styles[`wrapper-img`]} src={images[(currentIndex + 1) % images.length]} alt={`Image ${(currentIndex + 1) % images.length + 1}`} />
                            </div>
                            <div className={styles.back}>
                                <img className={styles[`wrapper-img`]} src={images[(currentIndex + 2) % images.length]} alt={`Image ${(currentIndex + 2) % images.length + 1}`} />
                            </div>
                            <div className={styles.left}>
                                <img className={styles[`wrapper-img`]} src={images[(currentIndex - 1 + images.length) % images.length]} alt={`Image ${(currentIndex - 1 + images.length) % images.length + 1}`} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.btns}>
                    <Button variant="noShadow" size="icon" onClick={handlePrev}>
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Previous slide</span>
                    </Button>

                    <Button variant="noShadow" size="icon" onClick={handleNext}>
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">Next slide</span>
                    </Button>
                </div>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{currentDescription.title}</h2>
                <p className={styles.description}>{currentDescription.text}</p>
            </div>
        </div>
        </div>
    );
};

export default Cube;