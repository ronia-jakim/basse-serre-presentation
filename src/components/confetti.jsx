import confetti from 'canvas-confetti';

export const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#5F9C3F', '#FFF347', '#F5BD1E']
  });
};

export const fireSideCannons = (leftX=0, rightX=1,  originY=1) => {
  const end = Date.now() + 2 * 1000;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 70,
      origin: { x: leftX, y: originY },
      colors: ['#7BB662', '#FFF347', '#F5BD1E']
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 70,
      origin: { x: rightX, y: originY },
      colors: ['#7BB662', '#FFF347', '#F5BD1E']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};
