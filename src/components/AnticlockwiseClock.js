import React, { useEffect, useRef } from 'react';

const AnticlockwiseClock = ({ speed }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const drawClock = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(100, 100, 90, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI / 6);
        const x = 100 + 70 * Math.cos(angle);
        const y = 100 + 70 * Math.sin(angle);
        ctx.fillText(i.toString(), x, y);
      }

      const now = new Date(time);
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourAngle = (hours + minutes / 60) * (Math.PI / 6) - Math.PI / 2;
      const minuteAngle = (minutes + seconds / 60) * (Math.PI / 30) - Math.PI / 2;
      const secondAngle = seconds * (Math.PI / 30) - Math.PI / 2;

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(100 + 50 * Math.cos(hourAngle), 100 + 50 * Math.sin(hourAngle));
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(100 + 70 * Math.cos(minuteAngle), 100 + 70 * Math.sin(minuteAngle));
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(100 + 80 * Math.cos(secondAngle), 100 + 80 * Math.sin(secondAngle));
      ctx.strokeStyle = 'red';
      ctx.stroke();
      ctx.strokeStyle = 'black';

      time -= speed;

      animationFrameId = requestAnimationFrame(() => drawClock(time));
    };

    drawClock(Date.now());

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return <canvas ref={canvasRef} width="200" height="200" />;
};

export default AnticlockwiseClock;