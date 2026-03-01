'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './ecube.module.css';
import classNames from 'classnames';
import { Button } from '../neobrutalism/button';

type CubeFace = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';

interface EcubeProps<T> {
  data: T[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
  renderFace: (item: T) => React.ReactNode;
  vertical?: boolean; // Added support for vertical
}

const mod = (n: number, length: number) => ((n % length) + length) % length;

const Ecube = <T,>({
  data,
  currentIndex,
  onNavigate,
  renderFace,
  vertical = false, 
}: EcubeProps<T>) => {
  const [step, setStep] = useState(0);
  const cubeRef = useRef<HTMLDivElement>(null);

  // GAP FIX: Calculate exact depth based on axis
  useEffect(() => {
    const updateDepth = () => {
      if (cubeRef.current) {
        // If vertical, depth is based on HEIGHT. If horizontal, based on WIDTH.
        const size = vertical 
          ? cubeRef.current.offsetHeight 
          : cubeRef.current.offsetWidth;
        
        const translateZ = size / 2;
        cubeRef.current.style.setProperty('--translateZ', `${translateZ}px`);
      }
    };

    // Initial and Resize
    updateDepth();
    const observer = new ResizeObserver(updateDepth);
    if (cubeRef.current) observer.observe(cubeRef.current);

    return () => observer.disconnect();
  }, [vertical]);

  const handlePrev = () => {
    setStep((s) => s - 1);
    onNavigate('prev');
  };

  const handleNext = () => {
    setStep((s) => s + 1);
    onNavigate('next');
  };

  // Sliding Window
  const windowData = {
    curr: data[mod(currentIndex, data.length)],
    next: data[mod(currentIndex + 1, data.length)],
    back: data[mod(currentIndex + 2, data.length)],
    prev: data[mod(currentIndex - 1, data.length)],
  };

  const phase = mod(step, 4);

  // Switch cycle based on axis
  const faceCycle: CubeFace[] = vertical
    ? ['front', 'bottom', 'back', 'top'] // Vertical cycle
    : ['front', 'right', 'back', 'left']; // Horizontal cycle

  const assignments: Partial<Record<CubeFace, T>> = {
    [faceCycle[mod(phase, 4)]]: windowData.curr,
    [faceCycle[mod(phase + 1, 4)]]: windowData.next,
    [faceCycle[mod(phase + 2, 4)]]: windowData.back,
    [faceCycle[mod(phase + 3, 4)]]: windowData.prev,
  };

  const getContent = (face: CubeFace): T | null => assignments[face] ?? null;

  // Rotation axis
  const angle = step * -90;
  const transform = vertical 
    ? `rotateX(${angle}deg)` 
    : `rotateY(${angle}deg)`;

  return (
    <div className={styles.container}>
      <div className={styles.cubeContainer}>
        <div
          ref={cubeRef}
          className={styles.cube}
          style={{ transform }}
        >
          {/* FRONT */}
          <div className={classNames(styles.face, styles.faceFront)}>
            {getContent('front') && renderFace(getContent('front')!)}
          </div>

          {/* BACK (Has special vertical CSS class) */}
          <div className={classNames(styles.face, styles.faceBack, { [styles.faceBackVertical]: vertical })}>
            {getContent('back') && renderFace(getContent('back')!)}
          </div>

          {/* VERTICAL FACES */}
          {vertical && (
            <>
              <div className={classNames(styles.face, styles.faceTop)}>
                {getContent('top') && renderFace(getContent('top')!)}
              </div>
              <div className={classNames(styles.face, styles.faceBottom)}>
                {getContent('bottom') && renderFace(getContent('bottom')!)}
              </div>
            </>
          )}

          {/* HORIZONTAL FACES */}
          {!vertical && (
            <>
              <div className={classNames(styles.face, styles.faceRight)}>
                {getContent('right') && renderFace(getContent('right')!)}
              </div>
              <div className={classNames(styles.face, styles.faceLeft)}>
                {getContent('left') && renderFace(getContent('left')!)}
              </div>
            </>
          )}
        </div>
      </div>



      {/* Dots (Top) */}
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

      {/* Controls (Bottom) */}
      <div className={styles.controls}>
        <Button onClick={handlePrev} variant="neutral" size="icon" className="bg-white hover:bg-gray-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {vertical ? <path d="M18 15l-6-6-6 6" /> : <path d="M15 18l-6-6 6-6" />}
          </svg>
        </Button>
        <Button onClick={handleNext} variant="neutral" size="icon" className="bg-white hover:bg-gray-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {vertical ? <path d="M6 9l6 6 6-6" /> : <path d="M9 18l6-6-6-6" />}
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Ecube;