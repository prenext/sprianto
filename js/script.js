// Function to generate a random color with 50% opacity
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = 'rgba(';
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 256) + ',';
  }
  color += '0.6)'; // Adding 50% opacity
  return color;
}

// Apply random background colors to overlay divs
document.addEventListener('DOMContentLoaded', function () {
  const overlay1 = document.getElementById('overlay1');
  const overlay2 = document.getElementById('overlay2');
  const overlay3 = document.getElementById('overlay3');
  const overlay4 = document.getElementById('overlay4');
  const overlay5 = document.getElementById('overlay5');

  overlay1.style.backgroundColor = getRandomColor();
  overlay2.style.backgroundColor = getRandomColor();
  overlay3.style.backgroundColor = getRandomColor();
  overlay4.style.backgroundColor = getRandomColor();
  overlay5.style.backgroundColor = getRandomColor();
});
