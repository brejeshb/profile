'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Controller, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import styles from './projectswiper.module.css';

// Define the Project type
interface Project {
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
}

const ProjectsSwipe = ({ projects }: { projects: Project[] }) => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsHeader}>Projects</h1>
      
      <div className={styles.swiperContainer}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Controller, Navigation]}
          className={styles.swiper}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: true,
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={project.imageUrl} alt="Project image" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navigationButtons}>
          <button className="swiper-button-prev">
            <span>&lt;</span>
          </button>
          <button className="swiper-button-next">
            <span>&gt;</span>
          </button>
        </div>
      </div>

      <div className={styles.contentSection}>
        <Swiper
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          className={styles.textSwiper}
          slidesPerView={1}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.buttonText && (
                  <a 
                    href={project.buttonLink || "#"} 
                    className={styles.projectButton}
                  >
                    {project.buttonText}
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectsSwipe;