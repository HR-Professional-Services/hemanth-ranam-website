"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x3b82f6, 2.5);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x60a5fa, 1.5);
    directionalLight2.position.set(-5, -5, -2);
    scene.add(directionalLight2);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Glass Icosahedron Wireframe
    const icosahedronGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    });
    const wireframeMesh = new THREE.Mesh(icosahedronGeo, wireframeMat);
    mainGroup.add(wireframeMesh);

    // 2. Inner Solid Geometric Core
    const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1d4ed8,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
      transmission: 0.6,
      ior: 1.5,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 3. Orbital Ring
    const ringGeo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // 4. Floating Nodes / Particles
    const particlesCount = 36;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 5;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.25 + targetX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 + targetY;

      coreMesh.rotation.y = -elapsedTime * 0.4;
      coreMesh.rotation.z = elapsedTime * 0.2;

      ringMesh.rotation.z = elapsedTime * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }

      icosahedronGeo.dispose();
      wireframeMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center pointer-events-auto"
      aria-hidden="true"
    >
      {!hasWebGL && (
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500/20 via-sky-400/20 to-indigo-500/10 blur-2xl animate-pulse" />
      )}
    </div>
  );
}
