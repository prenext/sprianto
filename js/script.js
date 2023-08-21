// Function to generate a random color
function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

// Apply random background colors to overlay divs
document.addEventListener('DOMContentLoaded', function () {
      const overlay1 = document.getElementById('overlay1');
      const overlay2 = document.getElementById('overlay2');

      overlay1.style.backgroundColor = getRandomColor();
      overlay2.style.backgroundColor = getRandomColor();
});
