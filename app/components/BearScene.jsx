"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const BearScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe5e2de);
    // scene.background = new THREE.Color(0x808080);
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    // Add OrbitControls with restrictions
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // DISABLE panning and zooming
    controls.enablePan = false;   // Can't move around screen
    controls.enableZoom = false;  // Can't zoom in/out
    
    // KEEP rotation enabled (spin and pivot)
    controls.enableRotate = true;

    let model;
    const gltfLoader = new GLTFLoader();
    
    gltfLoader.load('/3d/bear/bear.glb', (gltf) => {
      model = gltf.scene;
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 5 / maxDim; // Adjusted scale for better fit
      model.scale.multiplyScalar(scale);

      scene.add(model);
    });

    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    // Animation variables
    let time = 0;
    const floatSpeed = 0.002;
    const floatHeight = 0.5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      // Floating animation
      if (model) {
        time += floatSpeed;
        model.position.y = Math.sin(time) * floatHeight;
        model.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    }

    // Handle window resize (NOW INSIDE useEffect)
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default BearScene;