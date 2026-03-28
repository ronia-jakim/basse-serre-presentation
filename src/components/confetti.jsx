import confetti from 'canvas-confetti';

export const fireConfetti = ({y=0.6, x=0.5}) => {
  confetti({
    particleCount: 150,
    spread: 200,
    origin: { y: y, x: x },
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


export const fireSideDucks = (leftX=0, rightX=1,  originY=1) => {
  const end = Date.now() + 1000;

  const duck=confetti.shapeFromText({ text: '🦆', scalar: 3 });

  (function frame() {
    confetti({
      shapes: [duck],
      scalar: 5,
      particleCount: 2,
      angle: 60,
      spread: 70,
      origin: { x: leftX, y: originY },
    });
    confetti({
      shapes: [duck],
      scalar: 5,
      particleCount: 2,
      angle: 120,
      spread: 70,
      origin: { x: rightX, y: originY },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};
