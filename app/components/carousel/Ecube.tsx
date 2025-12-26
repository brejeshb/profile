'use client';
import React, { useState, useRef, useEffect } from "react";
import styles from "./ecube.module.css";
import classNames from 'classnames';
import { Button } from '../neobrutalism/button';

interface EcubeProps {
  data: any[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
  renderFace: (item: any) => React.ReactNode;
}

const mod = (n: number, length: number) => ((n % length) + length) % length;

const Ecube: React.FC<EcubeProps> = ({ data, currentIndex, onNavigate, renderFace }) => {
  const [step, setStep] = useState(0);
  const cubeRef = useRef<HTMLDivElement>(null);

  // GAP FIX: Calculate exact depth based on current width
  useEffect(() => {
    const updateDepth = () => {
      if (cubeRef.current) {
        const width = cubeRef.current.offsetWidth;
        // The distance from center to face is exactly half the width
        const translateZ = width / 2;
        cubeRef.current.style.setProperty('--translateZ', `${translateZ}px`);
      }
    };

    // Initial calculation
    updateDepth();

    // Re-calculate on resize
    const observer = new ResizeObserver(updateDepth);
    if (cubeRef.current) observer.observe(cubeRef.current);

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setStep(step - 1);
    onNavigate('prev');
  };

  const handleNext = () => {
    setStep(step + 1);
    onNavigate('next');
  };

  const windowData = {
    curr: data[mod(currentIndex, data.length)],
    next: data[mod(currentIndex + 1, data.length)],
    back: data[mod(currentIndex + 2, data.length)],
    prev: data[mod(currentIndex - 1, data.length)],
  };

  const phase = mod(step, 4);
  const faceCycle = ['front', 'right', 'back', 'left'];

  const assignments: Record<string, any> = {
    [faceCycle[mod(phase, 4)]]: windowData.curr,
    [faceCycle[mod(phase + 1, 4)]]: windowData.next,
    [faceCycle[mod(phase + 2, 4)]]: windowData.back,
    [faceCycle[mod(phase + 3, 4)]]: windowData.prev,
  };

  const getContent = (faceName: string) => assignments[faceName] ?? null;
  const angle = step * -90;

  return (
    <div className={styles.container}>
      <div className={styles.cubeContainer}>
        <div
          ref={cubeRef}
          className={styles.cube}
          style={{
            transform: `rotateY(${angle}deg)`,
          }}
        >
          <div className={classNames(styles.face, styles.faceFront)}>
            {getContent('front') && renderFace(getContent('front'))}
          </div>
          <div className={classNames(styles.face, styles.faceBack)}>
            {getContent('back') && renderFace(getContent('back'))}
          </div>
          <div className={classNames(styles.face, styles.faceRight)}>
            {getContent('right') && renderFace(getContent('right'))}
          </div>
          <div className={classNames(styles.face, styles.faceLeft)}>
            {getContent('left') && renderFace(getContent('left'))}
          </div>
        </div>
      </div>

      {/* STYLING FIX: Dots Container */}
      <div className={styles.dots}>
        {data.map((_, index) => (
          <button
            key={index}
            className={classNames(styles.dot, {
              [styles.dotActive]: index === currentIndex
            })}
            onClick={() => {
              const diff = index - currentIndex;
              setStep(step + diff);
              onNavigate(diff > 0 ? 'next' : 'prev');
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        {/* Force bg-white here if tailwind config is missing bg-bw */}
        <Button onClick={handlePrev} variant="neutral" size="icon" className="bg-white hover:bg-gray-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Button>
        <Button onClick={handleNext} variant="neutral" size="icon" className="bg-white hover:bg-gray-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Ecube;