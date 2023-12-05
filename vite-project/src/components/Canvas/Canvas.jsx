import React, { useRef, useEffect } from 'react';

const Canvas = ({ canvasRef, imageData }) => {

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let isDrawing = false;

    const startDrawing = (event) => {
      isDrawing = true;
      draw(event);
    };

    const stopDrawing = () => {
      isDrawing = false;
      context.beginPath(); // Start a new path for the next draw
    };

    const draw = (event) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const mouseX = (event.clientX - rect.left) * scaleX;
      const mouseY = (event.clientY - rect.top) * scaleY;

      context.lineWidth = 2;
      context.lineCap = 'round';
      context.strokeStyle = 'black';

      context.lineTo(mouseX, mouseY);
      context.stroke();
      context.beginPath();
      context.moveTo(mouseX, mouseY);
    };

    if (imageData) {
        const img = new Image()
        img.src = imageData
        img.onload = () => {
            context.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
    }

    canvasRef.current.clearCanvas = () => {
        context.clearRect(0,0,canvas.width,canvas.height)
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [canvasRef, imageData]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%'/*, position: 'absolute'*/ }}
    />
  );
};

export default Canvas;
