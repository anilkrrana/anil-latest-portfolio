import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  alpha: number;
}

interface Node3D {
  x: number;
  y: number;
  z: number;
  label: string;
  color: string;
}

export default function SpaceCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for 3D camera tilt
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / (width || 1)) * 2 - 1;
      const normY = (e.clientY / (height || 1)) * 2 - 1;
      targetRotationY = normX * 0.35; // yaw
      targetRotationX = -normY * 0.25; // pitch
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Generate 3D Starfield / Data Nodes
    const particleCount = 120;
    const particles: Particle3D[] = [];
    const colors = ["#00A1E0", "#00E5FF", "#3B82F6", "#6366F1", "#38BDF8"];

    for (let i = 0; i < particleCount; i++) {
      const radius = 600 + Math.random() * 800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    // 3D Geometric Floating Icosahedron Vertices
    const phiVal = (1 + Math.sqrt(5)) / 2;
    const icoScale = 140;
    const rawIcoVertices: [number, number, number][] = [
      [-1, phiVal, 0], [1, phiVal, 0], [-1, -phiVal, 0], [1, -phiVal, 0],
      [0, -1, phiVal], [0, 1, phiVal], [0, -1, -phiVal], [0, 1, -phiVal],
      [phiVal, 0, -1], [phiVal, 0, 1], [-phiVal, 0, -1], [-phiVal, 0, 1]
    ].map(([vx, vy, vz]) => [vx * icoScale, vy * icoScale, vz * icoScale]);

    // Icosahedron Edges
    const icoEdges: [number, number][] = [
      [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
      [1, 5], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
      [3, 4], [3, 6], [3, 8], [3, 9],
      [4, 5], [4, 9], [5, 9],
      [6, 7], [6, 8], [7, 8],
      [8, 9],
      [10, 11]
    ];

    // Floating Tech Orbit Nodes (MuleSoft, Salesforce, Spring, etc.)
    const orbitNodes: Node3D[] = [
      { x: 300, y: -100, z: 200, label: "MuleSoft 4.9", color: "#00E5FF" },
      { x: -320, y: 140, z: 150, label: "Salesforce Cloud", color: "#00A1E0" },
      { x: 220, y: 260, z: -100, label: "DataWeave 2.0", color: "#38BDF8" },
      { x: -250, y: -200, z: 250, label: "Java 21 · Spring Boot", color: "#60A5FA" },
      { x: 0, y: -300, z: -180, label: "API-Led Connectivity", color: "#818CF8" },
      { x: -300, y: 50, z: -250, label: "PostgreSQL · Redis", color: "#34D399" },
    ];

    let angle = 0;
    const fov = 480;

    const render = () => {
      try {
        angle += 0.005;

        // Smooth camera interpolation
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        ctx.clearRect(0, 0, width, height);

        const isDark = theme === "dark" || !theme;
        const centerX = width / 2;
        const centerY = height * 0.42; // centered vertically around hero

        const cosY = Math.cos(currentRotationY + angle * 0.2);
        const sinY = Math.sin(currentRotationY + angle * 0.2);
        const cosX = Math.cos(currentRotationX);
        const sinX = Math.sin(currentRotationX);

        // 1. Draw 3D Particle Cloud
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Orbit particle slightly
          const rx = p.baseX * cosY - p.baseZ * sinY;
          const rz = p.baseX * sinY + p.baseZ * cosY;
          const ry = p.baseY * cosX - rz * sinX;
          const finalZ = p.baseY * sinX + rz * cosX + 900;

          if (finalZ > 10) {
            const scale = fov / finalZ;
            const x2d = centerX + rx * scale;
            const y2d = centerY + ry * scale;

            if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
              const alpha = Math.min(1, Math.max(0, p.alpha * (scale * 1.5)));
              ctx.beginPath();
              ctx.arc(x2d, y2d, Math.max(0.5, p.size * scale), 0, Math.PI * 2);
              ctx.fillStyle = p.color;
              ctx.globalAlpha = isDark ? alpha * 0.65 : alpha * 0.4;
              ctx.fill();
            }
          }
        }
        ctx.globalAlpha = 1;

        // 2. Draw Floating 3D Cyber Icosahedron Core
        const icoRotY = angle * 0.5 + currentRotationY;
        const icoRotX = angle * 0.3 + currentRotationX;
        const cIY = Math.cos(icoRotY);
        const sIY = Math.sin(icoRotY);
        const cIX = Math.cos(icoRotX);
        const sIX = Math.sin(icoRotX);

        const projectedIco: { x: number; y: number; z: number; visible: boolean }[] = [];

        for (let i = 0; i < rawIcoVertices.length; i++) {
          const [vx, vy, vz] = rawIcoVertices[i];
          const rx = vx * cIY - vz * sIY;
          const rz = vx * sIY + vz * cIY;
          const ry = vy * cIX - rz * sIX;
          const finalZ = vy * sIX + rz * cIX + 600;

          if (finalZ > 20) {
            const scale = fov / finalZ;
            projectedIco.push({
              x: centerX + rx * scale,
              y: centerY + ry * scale,
              z: finalZ,
              visible: true,
            });
          } else {
            projectedIco.push({ x: 0, y: 0, z: 0, visible: false });
          }
        }

        // Render Icosahedron Wireframe Edges
        ctx.lineWidth = 1;
        ctx.strokeStyle = isDark ? "rgba(0, 229, 255, 0.22)" : "rgba(0, 161, 224, 0.22)";
        for (let i = 0; i < icoEdges.length; i++) {
          const [idxA, idxB] = icoEdges[i];
          const ptA = projectedIco[idxA];
          const ptB = projectedIco[idxB];

          if (ptA && ptB && ptA.visible && ptB.visible) {
            ctx.beginPath();
            ctx.moveTo(ptA.x, ptA.y);
            ctx.lineTo(ptB.x, ptB.y);
            ctx.stroke();
          }
        }

        // Render Icosahedron Vertices Glowing Nodes
        for (let i = 0; i < projectedIco.length; i++) {
          const pt = projectedIco[i];
          if (pt.visible) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? "#00E5FF" : "#00A1E0";
            ctx.shadowBlur = isDark ? 10 : 4;
            ctx.shadowColor = "#00E5FF";
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        // 3. Render 3D Orbiting Technology Nodes
        for (let i = 0; i < orbitNodes.length; i++) {
          const node = orbitNodes[i];
          const orbAngle = angle * 0.4 + (i * (Math.PI * 2 / orbitNodes.length));
          const rad = 320;
          const ox = Math.cos(orbAngle) * rad;
          const oz = Math.sin(orbAngle) * rad;
          const oy = node.y + Math.sin(angle * 1.5 + i) * 30;

          // Apply camera rotation
          const rx = ox * cosY - oz * sinY;
          const rz = ox * sinY + oz * cosY;
          const ry = oy * cosX - rz * sinX;
          const finalZ = oy * sinX + rz * cosX + 650;

          if (finalZ > 30) {
            const scale = fov / finalZ;
            const x2d = centerX + rx * scale;
            const y2d = centerY + ry * scale;

            // Connect laser line to center gateway
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x2d, y2d);
            ctx.strokeStyle = isDark ? "rgba(0, 229, 255, 0.12)" : "rgba(0, 161, 224, 0.12)";
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 4]);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw Glowing Node
            ctx.beginPath();
            ctx.arc(x2d, y2d, Math.max(3, 4.5 * scale), 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.shadowBlur = isDark ? 14 : 8;
            ctx.shadowColor = node.color;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Draw Label Pill
            if (scale > 0.45) {
              ctx.font = `600 ${Math.max(9, Math.round(11 * scale))}px 'JetBrains Mono', monospace`;
              ctx.fillStyle = isDark ? "rgba(224, 242, 254, 0.9)" : "rgba(15, 23, 42, 0.85)";
              ctx.fillText(node.label, x2d + 10, y2d + 4);
            }
          }
        }
      } catch (err) {
        // Graceful error recovery
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75 dark:opacity-90"
      />
      {/* 3D Horizon Grid Plane */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none opacity-40 dark:opacity-60"
        style={{
          background: "linear-gradient(to top, rgba(0, 161, 224, 0.15) 0%, transparent 80%)",
          transform: "perspective(600px) rotateX(65deg) scale(1.6)",
          transformOrigin: "bottom center",
          backgroundImage: `
            linear-gradient(to right, rgba(0, 161, 224, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 161, 224, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, black 20%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 95%)",
        }}
      />
    </div>
  );
}
