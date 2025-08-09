import React, { useEffect } from 'react';

const StarStreakBackground = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'absolute bg-white rounded-full animate-float-up';

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;

      const duration = Math.random() * 10 + 5;
      star.style.animationDuration = `${duration}s`;
      star.style.animtionDelay = `${Math.random() * 5}s`;

      if(Math.random() > 0.7) {
        star.style.animationName = 'float-up, twinkle';
        star.style.animationDuration = `${duration}s, ${Math.random() * 3 + 2}s`;
        star.style.animationIterationCount = 'infinite, infinite';
      }

      const container = document.getElementById('starsContainer');
      if(container){
        container.appendChild(star);
        star.addEventListener('animationEnd' , function() {
          star.remove();
          createStar();
        })
      }
    };

    const starCount = 150;
    for(let i = 0; i < starCount; i++) {
      createStar();
    }

    return () => {
      const container = document.getElementById('starsContainer');
      if(container) {
        container.innerHTML = '';
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 z-10" id="starsContainer"/>  
  );
};

export default StarStreakBackground;