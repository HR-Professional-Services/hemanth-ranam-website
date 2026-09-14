"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function TechBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group to hold our 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Wireframe Polyhedron (Vivid Royal Blue)
    const icoGeometry = new THREE.IcosahedronGeometry(7.5, 1);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const icoMaterial = new THREE.LineBasicMaterial({
      color: 0x2563eb, // Royal blue
      transparent: true,
      opacity: 0.38,
      linewidth: 1,
    });
    const icoMesh = new THREE.LineSegments(icoWireframe, icoMaterial);
    mainGroup.add(icoMesh);

    // 2. Inner Orbiting Geometric Ring / Torus (Deep Electric Indigo)
    const torusGeometry = new THREE.TorusGeometry(10, 0.06, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x4f46e5, // Deep Indigo
      transparent: true,
      opacity: 0.28,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    mainGroup.add(torusMesh);

    // 3. Second Intersecting Orbiting Ring (Vivid Cyan)
    const ringGeometry = new THREE.RingGeometry(11.5, 11.6, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Vibrant Cyan Blue
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.y = Math.PI / 4;
    ringMesh.rotation.x = -Math.PI / 6;
    mainGroup.add(ringMesh);

    // 4. Floating Particles / Node Constellation (Blues, Cyans, Indigos)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x2563eb), // royal blue
      new THREE.Color(0x0284c7), // cyan
      new THREE.Color(0x4f46e5), // indigo
      new THREE.Color(0x0ea5e9), // sky blue
    ];

    for (let i = 0; i < particleCount; i++) {
      // Scatter within a sphere of radius 16
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5 + Math.cbrt(Math.random()) * 14;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 5. Subtle Mouse Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.35;
      targetRotationX = -mouseY * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop with Visibility Check
    let animationFrameId: number;
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();

      // Slow elegant continuous rotation
      icoMesh.rotation.y += delta * 0.08;
      icoMesh.rotation.x += delta * 0.04;

      torusMesh.rotation.z += delta * 0.06;
      torusMesh.rotation.y += delta * 0.03;

      ringMesh.rotation.z -= delta * 0.05;

      particles.rotation.y += delta * 0.03;
      particles.rotation.x += delta * 0.015;

      // Smooth mouse follow interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.04;
      currentRotationY += (targetRotationY - currentRotationY) * 0.04;

      mainGroup.rotation.x = currentRotationX;
      mainGroup.rotation.y = currentRotationY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      icoGeometry.dispose();
      icoMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85 transition-opacity duration-1000"
      style={{ willChange: "transform" }}
    />
  );
}
