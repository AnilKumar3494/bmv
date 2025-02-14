import React, { useEffect, useRef } from "react";

const Sademojiesrain = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const emoji = ["🥲", "🥺", "😦", "😭"];
    const circles = [];

    const addCircle = (delay, range, color) => {
      setTimeout(() => {
        const c = createCircle(
          range[0] + Math.random() * range[1],
          80 + Math.random() * 4,
          color,
          {
            x: -0.15 + Math.random() * 0.3,
            y: 1 + Math.random() * 1,
          },
          range
        );
        circles.push(c);
      }, delay);
    };

    const createCircle = (x, y, c, v, range) => {
      const update = () => {
        if (y > 800) {
          y = 70 + Math.random() * 4;
          x = range[0] + Math.random() * range[1];
        }
        y += v.y;
        x += v.x;
        element.style.opacity = 1;
        element.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
        element.style.webkitTransform = `translate3d(${x}px, ${y}px, 0px)`;
        element.style.mozTransform = `translate3d(${x}px, ${y}px, 0px)`;
      };

      const element = document.createElement("span");
      element.style.opacity = 0;
      element.style.position = "absolute";
      element.style.fontSize = "26px";
      element.style.color = `hsl(${(Math.random() * 360) | 0},80%,50%)`;
      element.innerHTML = c;
      container.appendChild(element);

      return { update };
    };

    for (let i = 0; i < 5; i++) {
      addCircle(
        i * 150,
        [10 + 0, 300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      addCircle(
        i * 150,
        [10 + 0, -300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      addCircle(
        i * 150,
        [10 - 200, -300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      addCircle(
        i * 150,
        [10 + 200, 300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      addCircle(
        i * 150,
        [10 - 400, -300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      addCircle(
        i * 150,
        [10 + 400, 300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      addCircle(
        i * 150,
        [10 - 600, -300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      addCircle(
        i * 150,
        [10 + 600, 300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
    }

    const animate = () => {
      for (const circle of circles) {
        circle.update();
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      const container = containerRef.current;
      if (container) {
        circles.forEach((circle) => {
          container.removeChild(circle.element);
        });
      }
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:600,700"
        rel="stylesheet"
      />
      <div className="all">
        <div className="container">
          <div ref={containerRef} className="animate"></div>
        </div>
      </div>
    </>
  );
};

export default Sademojiesrain;
