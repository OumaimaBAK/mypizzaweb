const hoverSound = document.getElementById('hoverSound');
hoverSound.volume = 0.1;
  
const pizzaButtons = document.querySelectorAll('.pizzas');

pizzaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0; 
      hoverSound.play();
    });
 });