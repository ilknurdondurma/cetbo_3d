import ScrollReveal from 'scrollreveal';

const scrollRevealConfig = () => {
  const sr = ScrollReveal({ reset: true });

  sr.reveal('.animationLoop', { 
    delay: 300,
    reset: true,
    afterReveal: () => console.log('animationLoop yenilendi')
  });
  sr.reveal('.animation', { 
    delay: 100, 
    reset: false,
    afterReveal: () => console.log('animation yenilendi')
  });
};

export default scrollRevealConfig;
