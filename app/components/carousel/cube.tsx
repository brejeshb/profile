// 'use client';

// import React, { useState } from 'react';
// import styles from './cube.module.css';
// import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Info } from "lucide-react";
// import {HoverCard, HoverCardTrigger, HoverCardContent} from "../neobrutalism/hover";

// // Progress component
// const Progress = ({ value, max, className }: { value: number; max: number; className?: string }) => {
//   const dots = [];
//   for (let i = 0; i < max; i++) {
//     dots.push(
//       <span 
//         key={i} 
//         className={`${styles.dot} ${i === value ? styles.activeDot : ''}`}
//       ></span>
//     );
//   }
//   return <div className={className}>{dots}</div>;
// };

// // Define images and descriptions for horizontal rotation
// const horizontalImages = [
//     '/images/table2.png',
//     '/images/image1.jpg',
//     '/images/table2.png',
//     '/images/image1.jpg',
//     '/images/table2.png',
// ];

// const horizontalDescriptions = [
//     {
//         title: "Project 1",
//         text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
//                commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
//                asperiores mollitia.`
//     },
//     {
//         title: "Project 2",
//         text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
//                commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
//                asperiores mollitia.`
//     },
//     {
//         title: "Project 3",
//         text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
//                commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
//                asperiores mollitia.`
//     },
//     {
//         title: "Project 4",
//         text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
//                commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
//                asperiores mollitia.`
//     },
//     {
//         title: "Project 5",
//         text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at adipisci repellendus facilis illo,
//                commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet esse temporibus
//                asperiores mollitia.`
//     },
// ];

// // Define images and descriptions for vertical rotation (e.g., courseworks)
// const verticalImages = [
//     '/images/image1.jpg',
//     '/images/table2.png',
//     '/images/image1.jpg',
// ];

// const verticalDescriptions = [
//     {
//         title: "Coursework 1",
//         text: `This is a sample coursework project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//                Aliquid at adipisci repellendus facilis illo, commodi distinctio aut error fugiat ipsam.`
//     },
//     {
//         title: "Coursework 2",
//         text: `This is another sample coursework project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                Commodi distinctio aut error fugiat ipsam libero sed modi? Delectus suscipit amet.`
//     },
//     {
//         title: "Coursework 3",
//         text: `This is a third sample coursework project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                Delectus suscipit amet esse temporibus asperiores mollitia.`
//     },
// ];

// // Button component with console-like styling
// const NavigationButton = ({ onClick, icon, label }: { onClick: () => void, icon: React.ReactNode, label: string }) => (
//     <button 
//         onClick={onClick}
//         className={styles.consoleButton}
//         aria-label={label}
//     >
//         {icon}
//     </button>
// );

// // HorizontalCube Component - Only handles horizontal rotation
// const HorizontalCube = ({ 
//     index, 
//     // onPrev, 
//     // onNext 
// }: { 
//     index: number, 
//     onPrev: () => void, 
//     onNext: () => void 
// }) => {
//     const [rotationY, setRotationY] = useState(0);
    
//     // Get current image based on face position - horizontal only
//     const getCurrentImage = (facePosition: string) => {
//         switch(facePosition) {
//             case 'front': return horizontalImages[index];
//             case 'right': return horizontalImages[(index + 1) % horizontalImages.length];
//             case 'back': return horizontalImages[(index + 2) % horizontalImages.length];
//             case 'left': return horizontalImages[(index + 3) % horizontalImages.length];
//             case 'top': return horizontalImages[index]; // Default for top/bottom
//             case 'bottom': return horizontalImages[index]; // Default for top/bottom
//             default: return horizontalImages[0];
//         }
//     };
    
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.container}>
//                 <div
//                     className={styles.imageCube}
//                     style={{ transform: `rotateY(${rotationY}deg)` }}
//                 >
//                     <div className={styles.front}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('front')} 
//                             alt="Front face" 
//                         />
//                     </div>
//                     <div className={styles.right}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('right')} 
//                             alt="Right face" 
//                         />
//                     </div>
//                     <div className={styles.back}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('back')} 
//                             alt="Back face" 
//                         />
//                     </div>
//                     <div className={styles.left}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('left')} 
//                             alt="Left face" 
//                         />
//                     </div>
//                     <div className={styles.top}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('top')} 
//                             alt="Top face" 
//                         />
//                     </div>
//                     <div className={styles.bottom}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('bottom')} 
//                             alt="Bottom face" 
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // VerticalCube Component - Only handles vertical rotation
// const VerticalCube = ({ 
//     index, 
//     onPrev, 
//     onNext 
// }: { 
//     index: number, 
//     onPrev: () => void, 
//     onNext: () => void 
// }) => {
//     const [rotationX, setRotationX] = useState(0);
    
//     // Get current image based on face position - vertical only
//     const getCurrentImage = (facePosition: string) => {
//         switch(facePosition) {
//             case 'front': return verticalImages[index];
//             case 'top': return verticalImages[(index + 2) % verticalImages.length];
//             case 'back': return verticalImages[index];
//             case 'bottom': return verticalImages[(index + 1) % verticalImages.length];
//             case 'left': return verticalImages[index]; // Default for left/right
//             case 'right': return verticalImages[index]; // Default for left/right
//             default: return verticalImages[0];
//         }
//     };
    
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.container}>
//                 <div
//                     className={styles.imageCube}
//                     style={{ transform: `rotateX(${rotationX}deg)` }}
//                 >
//                     <div className={styles.front}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('front')} 
//                             alt="Front face" 
//                         />
//                     </div>
//                     <div className={styles.right}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('right')} 
//                             alt="Right face" 
//                         />
//                     </div>
//                     <div className={styles.back}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('back')} 
//                             alt="Back face" 
//                         />
//                     </div>
//                     <div className={styles.left}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('left')} 
//                             alt="Left face" 
//                         />
//                     </div>
//                     <div className={styles.top}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('top')} 
//                             alt="Top face" 
//                         />
//                     </div>
//                     <div className={styles.bottom}>
//                         <img 
//                             className={styles.wrapperImg} 
//                             src={getCurrentImage('bottom')} 
//                             alt="Bottom face" 
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Main Cube component
// const Cube: React.FC = () => {
//     // State for tracking indexes
//     const [horizontalIndex, setHorizontalIndex] = useState(0);
//     const [verticalIndex, setVerticalIndex] = useState(0);
//     const [transitioning, setTransitioning] = useState(false);
    
//     // Mode switching state - 'horizontal' or 'vertical'
//     const [activeMode, setActiveMode] = useState<'horizontal' | 'vertical'>('horizontal');

//     // Handle horizontal navigation
//     const handleRight = () => {
//         if (transitioning) return;
        
//         setTransitioning(true);
        
//         if (activeMode === 'horizontal') {
//             setHorizontalIndex(prevIndex => (prevIndex + 1) % horizontalImages.length);
//         } else {
//             // Switch to horizontal mode
//             setActiveMode('horizontal');
//         }
        
//         setTimeout(() => setTransitioning(false), 1000);
//     };

//     const handleLeft = () => {
//         if (transitioning) return;
        
//         setTransitioning(true);
        
//         if (activeMode === 'horizontal') {
//             setHorizontalIndex(prevIndex => 
//                 prevIndex === 0 ? horizontalImages.length - 1 : prevIndex - 1
//             );
//         } else {
//             // Switch to horizontal mode
//             setActiveMode('horizontal');
//         }
        
//         setTimeout(() => setTransitioning(false), 1000);
//     };

//     // Handle vertical navigation
//     const handleUp = () => {
//         if (transitioning) return;
        
//         setTransitioning(true);
        
//         if (activeMode === 'vertical') {
//             setVerticalIndex(prevIndex => 
//                 prevIndex === 0 ? verticalImages.length - 1 : prevIndex - 1
//             );
//         } else {
//             // Switch to vertical mode
//             setActiveMode('vertical');
//         }
        
//         setTimeout(() => setTransitioning(false), 1000);
//     };

//     const handleDown = () => {
//         if (transitioning) return;
        
//         setTransitioning(true);
        
//         if (activeMode === 'vertical') {
//             setVerticalIndex(prevIndex => (prevIndex + 1) % verticalImages.length);
//         } else {
//             // Switch to vertical mode
//             setActiveMode('vertical');
//         }
        
//         setTimeout(() => setTransitioning(false), 1000);
//     };

//     // Handle direct mode switching
//     const switchToMode = (mode: 'horizontal' | 'vertical') => {
//         if (mode !== activeMode && !transitioning) {
//             setTransitioning(true);
//             setActiveMode(mode);
//             setTimeout(() => setTransitioning(false), 1000);
//         }
//     };

//     // Get current description based on active mode
//     const currentDescription = activeMode === 'horizontal' 
//         ? horizontalDescriptions[horizontalIndex]
//         : verticalDescriptions[verticalIndex];
    
//     // Function to handle description transitions
//     const getDescriptionClass = () => {
//         return transitioning ? styles.transitioning : '';
//     };

//     return (
//         <div>
//             <h1 className="flex text-6xl font-bold mb-6 justify-center">Projects</h1>
            
//             <div className={styles.pageContainer}>
//                 <div className={styles.cubeSection}>
//                     {/* Mode selector tabs - improved to be more clear */}
//                     <div className={styles.modeIndicator}>
//                         <button 
//                             onClick={() => switchToMode('horizontal')}
//                             className={`${styles.modeLabel} ${activeMode === 'horizontal' ? styles.activeMode : ''}`}
//                         >
//                             Portfolio Projects
//                         </button>
//                         <button 
//                             onClick={() => switchToMode('vertical')}
//                             className={`${styles.modeLabel} ${activeMode === 'vertical' ? styles.activeMode : ''}`}
//                         >
//                             Academic Work
//                         </button>
//                     </div>
                    
//                     <div className={styles.cubeContainer}>
//                         {/* Help button with hover card */}
//                         <div className={styles.helpButton}>
//                             <HoverCard>
//                                 <HoverCardTrigger asChild>
//                                     <button className={styles.infoButton} aria-label="How to use">
//                                         <Info size={18} />
//                                     </button>
//                                 </HoverCardTrigger>
//                                 <HoverCardContent>
//                                     <div className={styles.instructions}>
//                                         <h3 className="font-bold mb-2">How to navigate:</h3>
//                                         <p>• Click on the tabs above to switch categories</p>
//                                         <p>• In <strong>Portfolio Projects</strong> mode:</p>
//                                         <p>&nbsp;&nbsp;- Use Left/Right arrows to browse projects</p>
//                                         <p>• In <strong>Academic Work</strong> mode:</p>
//                                         <p>&nbsp;&nbsp;- Use Up/Down arrows to browse coursework</p>
//                                     </div>
//                                 </HoverCardContent>
//                             </HoverCard>
//                         </div>
                        
//                         {/* Progress indicators */}
//                         {activeMode === 'vertical' && (
//                             <div className={styles.verticalDotsContainer}>
//                                 <Progress 
//                                     value={verticalIndex}
//                                     max={verticalImages.length}
//                                     className={styles.verticalDots}
//                                 />
//                             </div>
//                         )}
                        
//                         {/* Render the appropriate cube based on active mode */}
//                         <div className={`${styles.cubeWrapper} ${transitioning ? styles.fadeTransition : ''}`}>
//                             {activeMode === 'horizontal' ? (
//                                 <HorizontalCube 
//                                     index={horizontalIndex} 
//                                     onPrev={handleLeft} 
//                                     onNext={handleRight} 
//                                 />
//                             ) : (
//                                 <VerticalCube 
//                                     index={verticalIndex} 
//                                     onPrev={handleUp} 
//                                     onNext={handleDown} 
//                                 />
//                             )}
//                         </div>
                        
//                         {/* Horizontal progress indicators */}
//                         {activeMode === 'horizontal' && (
//                             <div className={styles.horizontalDotsContainer}>
//                                 <Progress 
//                                     value={horizontalIndex}
//                                     max={horizontalImages.length}
//                                     className={styles.horizontalDots}
//                                 />
//                             </div>
//                         )}
                        
//                         {/* Mode-specific instructions */}
//                         <div className={styles.navigationLabel}>
//                             {activeMode === 'horizontal' 
//                                 ? "Use Left/Right Arrows to Navigate Projects" 
//                                 : "Use Up/Down Arrows to Navigate Academic Work"}
//                         </div>
                        
//                         {/* Keyboard-like controls */}
//                         <div className={styles.keyboardControls}>
//                             <div className={styles.upButtonRow}>
//                                 <NavigationButton 
//                                     onClick={handleUp} 
//                                     icon={<ArrowUp className="h-4 w-4" />} 
//                                     label={activeMode === 'vertical' ? "Previous coursework" : "Switch to Academic Work"}
//                                 />
//                             </div>
//                             <div className={styles.lowerButtonsRow}>
//                                 <NavigationButton 
//                                     onClick={handleLeft} 
//                                     icon={<ArrowLeft className="h-4 w-4" />} 
//                                     label={activeMode === 'horizontal' ? "Previous project" : "Switch to Projects"}
//                                 />
//                                 <NavigationButton 
//                                     onClick={handleDown} 
//                                     icon={<ArrowDown className="h-4 w-4" />} 
//                                     label={activeMode === 'vertical' ? "Next coursework" : "Switch to Academic Work"}
//                                 />
//                                 <NavigationButton 
//                                     onClick={handleRight} 
//                                     icon={<ArrowRight className="h-4 w-4" />} 
//                                     label={activeMode === 'horizontal' ? "Next project" : "Switch to Projects"}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className={styles.textContainer}>
//                     <div className={`${styles.descriptionContainer} ${getDescriptionClass()}`}>
//                         <h2 className={styles.title}>{currentDescription.title}</h2>
//                         <p className={styles.description}>{currentDescription.text}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cube;