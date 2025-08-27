import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let shootingStars = [];

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
    }

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: 0,
        dx: -6 - Math.random() * 4,
        dy: 6 + Math.random() * 4,
        length: 120 + Math.random() * 50,
      });
    }

    function drawShootingStars() {
      for (let i = 0; i < shootingStars.length; i++) {
        let s = shootingStars[i];
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length * s.dx * 0.1, s.y + s.length * s.dy * 0.1);
        ctx.stroke();

        s.x += s.dx;
        s.y += s.dy;

        if (s.x < -s.length || s.y > canvas.height + s.length) {
          shootingStars.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      drawStars();
      drawShootingStars();
      requestAnimationFrame(animate);
    }

    animate();
    const interval = setInterval(createShootingStar, 3000);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
