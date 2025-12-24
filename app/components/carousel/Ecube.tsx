'use client';
import React, { useState } from "react";
import styles from "./ecube.module.css";
import classNames from 'classnames';

const mod = (n: number, length: number) => ((n % length) + length) % length;

const Ecube: React.FC = () => {
  const [step, setStep] = useState(0); 
  const [isVertical, setIsVertical] = useState(false);

  const data = [1, 2, 3, 4, 5];

  // 1. Sliding Window Logic
  const currentItem = data[mod(step, data.length)];
  const nextItem    = data[mod(step + 1, data.length)];
  const backItem    = data[mod(step + 2, data.length)];
  const prevItem    = data[mod(step - 1, data.length)];

  const windowData = {
    curr: currentItem,
    next: nextItem,
    back: backItem,
    prev: prevItem,
  };

  // 2. Face Mapping
  const phase = mod(step, 4);
  const faceCycle = isVertical 
    ? ['front', 'top', 'back', 'bottom'] 
    : ['front', 'right', 'back', 'left'];

  const assignments: Record<string, number> = {
    [faceCycle[mod(phase, 4)]]:     windowData.curr,
    [faceCycle[mod(phase + 1, 4)]]: windowData.next,
    [faceCycle[mod(phase + 2, 4)]]: windowData.back,
    [faceCycle[mod(phase + 3, 4)]]: windowData.prev,
  };

  const getContent = (faceName: string) => assignments[faceName] ?? '';

  const angle = step * -90;
  const xRot = isVertical ? 1 : 0;
  const yRot = isVertical ? 0 : 1;

  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <label>
          <input 
            type="checkbox" 
            checked={isVertical} 
            onChange={(e) => {
                setIsVertical(e.target.checked);
                setStep(0); 
            }} 
          />
          Vertical Mode
        </label>
      </div>

      <div className={styles.cubeContainer}>
        <div
          className={styles.cube}
          style={{
            transform: `rotate3d(${xRot}, ${yRot}, 0, ${angle}deg)`,
          }}
        >
          <div className={classNames(styles.face, styles.faceFront)}>
            {getContent('front')}
          </div>

          <div 
            className={classNames(
              styles.face, 
              styles.faceBack, 
              // If vertical, override the transform to rotateX(180) instead of rotateY(180)
              { [styles.faceBackVertical]: isVertical } 
            )}
          >
            {getContent('back')}
          </div>

          <div className={classNames(styles.face, styles.faceTop, { [styles.hidden]: !isVertical })}>
            {getContent('top')}
          </div>
          <div className={classNames(styles.face, styles.faceBottom, { [styles.hidden]: !isVertical })}>
            {getContent('bottom')}
          </div>

          <div className={classNames(styles.face, styles.faceRight, { [styles.hidden]: isVertical })}>
            {getContent('right')}
          </div>
          <div className={classNames(styles.face, styles.faceLeft, { [styles.hidden]: isVertical })}>
            {getContent('left')}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        {isVertical ? (
          <>
            <button onClick={() => setStep(step - 1)}>Up (Prev)</button>
            <button onClick={() => setStep(step + 1)}>Down (Next)</button>
          </>
        ) : (
          <>
            <button onClick={() => setStep(step - 1)}>Left (Prev)</button>
            <button onClick={() => setStep(step + 1)}>Right (Next)</button>
          </>
        )}
      </div>
    </div>
  );
};
export default Ecube;