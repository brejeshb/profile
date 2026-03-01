"use client";
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const handleResize = () => {
  const container = document.getElementById('three-container');
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};
window.addEventListener('resize', handleResize);



const ThreeScene = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);
    const container = document.getElementById('three-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    container.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    // Add OrbitControls for mouse interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Add smooth damping
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 50;

    let model; // Store reference to the model
    const gltfLoader = new GLTFLoader();
    // gltfLoader.load('/3d/wall_e/scene.gltf', (gltf) => {
    gltfLoader.load('/3d/bear/bear.glb', (gltf) => {
      model = gltf.scene;
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      // model.position.sub(center);
      // Position
      model.position.set(10, 10, 10);
      // Rotation
      // object.rotation.set(x, y, z);
      // // Scale
      // object.scale.set(x, y, z);

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 20 / maxDim;
      model.scale.multiplyScalar(scale);

      scene.add(model);
    });

    camera.position.set(0, 5, 30);
    camera.lookAt(0, 0, 0);

    // Animation variables
    let time = 0;
    const floatSpeed = 0.002;
    const floatHeight = 0.5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      // Update OrbitControls
      controls.update();

      // Floating animation
      if (model) {
        time += floatSpeed;
        console.log(model.position)
        model.position.y = Math.sin(time) * floatHeight;
        // Optional: Add slight rotation
        model.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return null;
};

export default ThreeScene;