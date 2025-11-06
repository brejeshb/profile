'use client';
import React, { useState } from "react";
import styles from "./ecube.module.css";
import classNames from 'classnames';

const Ecube: React.FC = () => {
  // Axis components (x, y, z) and angle
  const [x, setX] = useState(1);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [deg, setDeg] = useState(0);

  console.log("rotate3d(", x, ",", y, ",", z, ",", deg, "deg)");

  return (
    <div className={styles.container}>
      <div
        className={styles.cube}
        style={{
          transform: `rotate3d(${x}, ${y}, ${z}, ${deg}deg)`,
        }}
      >

        <div className={classNames(styles.face, styles.faceFront)}>front</div>
        <div className={classNames(styles.face, styles.faceBack)}>back</div>
        <div className={classNames(styles.face, styles.faceTop)}>top</div>
        <div className={classNames(styles.face, styles.faceBottom)}>bottom</div>
        <div className={classNames(styles.face, styles.faceRight)}>right</div>
        <div className={classNames(styles.face, styles.faceLeft)}>left</div>
        rotate3d({x}, {y}, {z}, {deg}°)
      </div>

      <div className={styles.controls}>
        <button onClick={() => setX(x + 1)}>X +</button>
        <button onClick={() => setX(x - 1)}>X -</button>

        <button onClick={() => setY(y + 1)}>Y +</button>
        <button onClick={() => setY(y - 1)}>Y -</button>

        <button onClick={() => setZ(z + 1)}>Z +</button>
        <button onClick={() => setZ(z - 1)}>Z -</button>

        <button onClick={() => setDeg((deg + 15))}>Deg +15°</button>
        <button onClick={() => setDeg((deg - 15))}>Deg -15°</button>
      </div>
    </div>
  );
};
export default Ecube;
