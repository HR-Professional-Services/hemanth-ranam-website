"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5.5;

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

    const directionalLight1 = new THREE.DirectionalLight(0x3b82f6, 2.2);
    directionalLight1.position.set(4, 4, 4);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x60a5fa, 1.2);
    directionalLight2.position.set(-4, -4, -2);
    scene.add(directionalLight2);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Glass Icosahedron Wireframe
    const icosahedronGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
      roughness: 0.2,
      metalness: 0.8,
    });
    const wireframeMesh = new THREE.Mesh(icosahedronGeo, wireframeMat);
    mainGroup.add(wireframeMesh);

    // 2. Inner Solid Geometric Core
    const coreGeo = new THREE.OctahedronGeometry(0.8, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1d4ed8,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.35,
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
    const ringGeo = new THREE.TorusGeometry(2.1, 0.018, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // 4. Floating Particles
    const particlesCount = 24;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 4.5;
      posArray[i + 1] = (Math.random() - 0.5) * 4.5;
      posArray[i + 2] = (Math.random() - 0.5) * 4.5;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.5,
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

    const handleResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.22 + targetX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.18) * 0.15 + targetY;

      coreMesh.rotation.y = -elapsedTime * 0.35;
      coreMesh.rotation.z = elapsedTime * 0.18;

      ringMesh.rotation.z = elapsedTime * 0.25;

      renderer.render(scene, camera);
    };

    animate();

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
      className="relative w-full h-[280px] sm:h-[340px] lg:h-[400px] flex items-center justify-center pointer-events-auto"
      aria-hidden="true"
    >
      {!hasWebGL && (
        <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-blue-500/20 via-sky-400/20 to-indigo-500/10 blur-xl animate-pulse" />
      )}
    </div>
  );
}
