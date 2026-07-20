"use client";

import { useEffect, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SRGBColorSpace,
  Timer,
  TorusGeometry,
  Vector2,
  WebGLRenderer,
} from "three";

export default function SignalScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: "high-performance",
    });
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.outputColorSpace = SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const system = new Group();
    system.position.set(1.25, 0.05, 0);
    scene.add(system);

    const shellGeometry = new IcosahedronGeometry(1.8, 2);
    const shellMaterial = new MeshBasicMaterial({
      color: 0x2412e8,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const shell = new Mesh(shellGeometry, shellMaterial);
    system.add(shell);

    const orbitGeometry = new TorusGeometry(2.35, 0.018, 8, 160);
    const orbitMaterial = new MeshBasicMaterial({
      color: 0xff5a36,
      transparent: true,
      opacity: 0.72,
    });
    const orbit = new Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.set(1.03, 0.34, -0.28);
    system.add(orbit);

    const orbitTwoGeometry = new TorusGeometry(2.7, 0.009, 6, 180);
    const orbitTwoMaterial = new MeshBasicMaterial({
      color: 0x2412e8,
      transparent: true,
      opacity: 0.34,
    });
    const orbitTwo = new Mesh(orbitTwoGeometry, orbitTwoMaterial);
    orbitTwo.rotation.set(0.5, 1.2, 0.25);
    system.add(orbitTwo);

    const pointCount = window.innerWidth < 700 ? 150 : 280;
    const pointPositions = new Float32Array(pointCount * 3);
    for (let index = 0; index < pointCount; index += 1) {
      const angle = index * 0.42;
      const radius = 2.2 + (index % 17) * 0.055;
      pointPositions[index * 3] = Math.cos(angle) * radius;
      pointPositions[index * 3 + 1] = Math.sin(angle * 0.72) * 2.05;
      pointPositions[index * 3 + 2] = Math.sin(angle) * 0.9 - 0.7;
    }

    const pointsGeometry = new BufferGeometry();
    pointsGeometry.setAttribute("position", new BufferAttribute(pointPositions, 3));
    const pointsMaterial = new PointsMaterial({
      color: 0x2412e8,
      size: window.innerWidth < 700 ? 0.035 : 0.045,
      transparent: true,
      opacity: 0.46,
      sizeAttenuation: true,
    });
    const points = new Points(pointsGeometry, pointsMaterial);
    system.add(points);

    const pointer = new Vector2(0, 0);
    const pointerTarget = new Vector2(0, 0);
    const timer = new Timer();
    timer.connect(document);
    let frame = 0;
    let sceneVisible = true;

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 0.34;
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * -0.24;
    };

    const animate = (timestamp: number) => {
      frame = window.requestAnimationFrame(animate);
      if (!sceneVisible || document.hidden) return;

      timer.update(timestamp);
      const time = timer.getElapsed();
      pointer.lerp(pointerTarget, 0.035);
      system.rotation.x = time * 0.035 + pointer.y;
      system.rotation.y = time * 0.055 + pointer.x;
      shell.rotation.z = time * -0.045;
      orbit.rotation.z = -0.28 + time * 0.08;
      orbitTwo.rotation.z = 0.25 - time * 0.055;
      points.rotation.y = time * -0.018;
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        sceneVisible = entry.isIntersecting;
      },
      { threshold: 0.02 },
    );
    visibilityObserver.observe(mount);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    resize();
    animate(window.performance.now());

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      shellGeometry.dispose();
      shellMaterial.dispose();
      orbitGeometry.dispose();
      orbitMaterial.dispose();
      orbitTwoGeometry.dispose();
      orbitTwoMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      timer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      scene.clear();
    };
  }, []);

  return <div className="signal-scene" ref={mountRef} aria-hidden="true" />;
}
