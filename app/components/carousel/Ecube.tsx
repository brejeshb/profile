'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ecube.module.css';
import classNames from 'classnames';
import { Button } from '../neobrutalism/button';

type CubeFace = 'front' | 'right' | 'back' | 'left';

interface EcubeProps<T> {
  data: T[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
  renderFace: (item: T) => React.ReactNode;
}

const mod = (n: number, length: number) => ((n % length) + length) % length;

const Ecube = <T,>({
  data,
  currentIndex,
  onNavigate,
  renderFace,
}: EcubeProps<T>) => {
  const [step, setStep] = useState(0);
  const cubeRef = useRef<HTMLDivElement>(null);

  // GAP FIX: Calculate exact depth based on current width
  useEffect(() => {
    const updateDepth = () => {
      if (cubeRef.current) {
        const width = cubeRef.current.offsetWidth;
        const translateZ = width / 2;
        cubeRef.current.style.setProperty('--translateZ', `${translateZ}px`);
      }
    };

    updateDepth();

    const observer = new ResizeObserver(() => {
      updateDepth();
    });

    if (cubeRef.current) observer.observe(cubeRef.current);

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setStep((s) => s - 1);
    onNavigate('prev');
  };

  const handleNext = () => {
    setStep((s) => s + 1);
    onNavigate('next');
  };

  const windowData: Record<'curr' | 'next' | 'back' | 'prev', T> = {
    curr: data[mod(currentIndex, data.length)],
    next: data[mod(currentIndex + 1, data.length)],
    back: data[mod(currentIndex + 2, data.length)],
    prev: data[mod(currentIndex - 1, data.length)],
  };

  const phase = mod(step, 4);

  const faceCycle: CubeFace[] = ['front', 'right', 'back', 'left'];

  const assignments: Partial<Record<CubeFace, T>> = {
    [faceCycle[mod(phase, 4)]]: windowData.curr,
    [faceCycle[mod(phase + 1, 4)]]: windowData.next,
    [faceCycle[mod(phase + 2, 4)]]: windowData.back,
    [faceCycle[mod(phase + 3, 4)]]: windowData.prev,
  };

  const getContent = (face: CubeFace): T | null =>
    assignments[face] ?? null;

  const angle = step * -90;

  return (
    <div className={styles.container}>
      <div className={styles.cubeContainer}>
        <div
          ref={cubeRef}
          className={styles.cube}
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          <div className={classNames(styles.face, styles.faceFront)}>
            {getContent('front') && renderFace(getContent('front')!)}
          </div>
          <div className={classNames(styles.face, styles.faceBack)}>
            {getContent('back') && renderFace(getContent('back')!)}
          </div>
          <div className={classNames(styles.face, styles.faceRight)}>
            {getContent('right') && renderFace(getContent('right')!)}
          </div>
          <div className={classNames(styles.face, styles.faceLeft)}>
            {getContent('left') && renderFace(getContent('left')!)}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {data.map((_, index) => (
          <button
            key={index}
            className={classNames(styles.dot, {
              [styles.dotActive]: index === currentIndex,
            })}
            onClick={() => {
              const diff = index - currentIndex;
              setStep((s) => s + diff);
              onNavigate(diff > 0 ? 'next' : 'prev');
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <Button
          onClick={handlePrev}
          variant="neutral"
          size="icon"
          className="bg-white hover:bg-gray-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Button>

        <Button
          onClick={handleNext}
          variant="neutral"
          size="icon"
          className="bg-white hover:bg-gray-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Ecube;
