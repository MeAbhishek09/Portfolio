import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import StarsBackground from "../Stars/StarsBackground";

const technologies = [
  { name: "React", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "Python", color: "bg-green-500" },
  { name: "Tailwind CSS", color: "bg-teal-400" },
  { name: "Node.js", color: "bg-green-600" },
  { name: "ML", color: "bg-orange-500" },
  { name: "AI", color: "bg-orange-500" },
  { name: "dbhjhjb", color: "bg-orange-500" },
  { name: "TensorFlow", color: "bg-orange-500" },
];

const bubbleSize = 80;

const Technology = () => {
  const containerRef = useRef();
  const [positions, setPositions] = useState([]);

  // Initialize random positions
  useEffect(() => {
    const rect = containerRef.current.getBoundingClientRect();
    const initialPositions = technologies.map(() => ({
      x: Math.random() * (rect.width - bubbleSize),
      y: Math.random() * (rect.height - bubbleSize),
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }));
    setPositions(initialPositions);
  }, []);

  // Floating motion
  useEffect(() => {
    const interval = setInterval(() => {
      const rect = containerRef.current.getBoundingClientRect();
      setPositions((prev) =>
        prev.map((pos) => {
          // If being dragged, skip
          if (pos.isDragging) return pos;

          let newX = pos.x + pos.dx;
          let newY = pos.y + pos.dy;
          let dx = pos.dx;
          let dy = pos.dy;

          // Bounce off container edges
          if (newX <= 0 || newX >= rect.width - bubbleSize) dx *= -1;
          if (newY <= 0 || newY >= rect.height - bubbleSize) dy *= -1;

          return { ...pos, x: newX, y: newY, dx, dy };
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const handleDragStart = (index) => {
    setPositions((prev) =>
      prev.map((pos, i) => (i === index ? { ...pos, isDragging: true } : pos))
    );
  };

  const handleDragEnd = (index, info) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPositions((prev) =>
      prev.map((pos, i) => {
        if (i !== index) return pos;

        let newX = pos.x + info.offset.x;
        let newY = pos.y + info.offset.y;
        let dx = pos.dx;
        let dy = pos.dy;

        // Bounce off edges if outside container
        if (newX < 0) {
          newX = 0;
          dx = Math.abs(dx);
        }
        if (newX > rect.width - bubbleSize) {
          newX = rect.width - bubbleSize;
          dx = -Math.abs(dx);
        }
        if (newY < 0) {
          newY = 0;
          dy = Math.abs(dy);
        }
        if (newY > rect.height - bubbleSize) {
          newY = rect.height - bubbleSize;
          dy = -Math.abs(dy);
        }

        return { x: newX, y: newY, dx, dy };
      })
    );

    // Stop dragging
    setPositions((prev) =>
      prev.map((pos, i) => (i === index ? { ...pos, isDragging: false } : pos))
    );
  };

  return (
    <section className="w-full h-[60vh] bg-gray-900 text-white relative overflow-hidden flex items-center justify-center rounded-xl mx-auto ">
      <StarsBackground />
    <section className="w-[90%] h-[90%] "
      ref={containerRef}
    >
      <h2 className="absolute top-4 text-4xl font-bold text-center w-full z-10">
        My Technology Cloud
      </h2>

      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute p-5 rounded-full shadow-xl cursor-grab ${tech.color} text-white font-semibold`}
          style={{
            x: positions[index]?.x || 0,
            y: positions[index]?.y || 0,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 2,
            ease: "easeInOut",
          }}
          drag
          dragElastic={0.5}
          dragConstraints={containerRef}
          onDragStart={() => handleDragStart(index)}
          onDragEnd={(e, info) => handleDragEnd(index, info)}
          whileTap={{ cursor: "grabbing", scale: 1.2 }}
          whileHover={{ scale: 1.1, zIndex: 20 }}
        >
          {tech.name}
        </motion.div>
      ))}
    </section>
    </section>
  );
};

export default Technology;
