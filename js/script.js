// Create a section element
const section = document.createElement('section');

// Create a div element for the carousel
const carouselDiv = document.createElement('div');
carouselDiv.id = 'imageCarousel';
carouselDiv.className = 'carousel slide';
carouselDiv.setAttribute('data-bs-ride', 'carousel');

// Create a div element for the carousel-inner
const carouselInnerDiv = document.createElement('div');
carouselInnerDiv.className = 'carousel-inner';

// Define an array of image sources
const imageSources = [
  'https://picsum.photos/800/400/?random=hole',
  'https://picsum.photos/800/400/?random=well',
  'https://picsum.photos/800/400/?random=tank',
  'https://picsum.photos/800/400/?random=septic',
  'https://picsum.photos/800/400/?random=biodigester',
];

// Create carousel items dynamically
imageSources.forEach((src, index) => {
  const carouselItemDiv = document.createElement('div');
  carouselItemDiv.className = 'carousel-item' + (index === 0 ? ' active' : '');

  const img = document.createElement('img');
  img.src = src;
  img.className = 'img-responsive d-block w-100';
  img.alt = `Slide ${index + 1}`;

  const overlayDiv = document.createElement('div');
  overlayDiv.id = `overlay${index + 1}`;
  overlayDiv.className = 'carousel-overlay';

  const overlayText = document.createElement('p');
  overlayText.className = 'overlay-text';

  // Define overlay text content
  const overlayTextContents = [
    'Make your home a nice place to live in with our biodigester waste management solutions.',
    'Forget about the need of having to incur extra cost on waste exhaust system.',
    'We also provide a way that you can use the water from the digester for irrigation.',
    'We also provide plumbing services eliminating the need to call plumbers for the biodigester to start working.',
    'We provide repair services, so if you have a faulty digester, don\'t hesitate to call us.',
  ];

  overlayText.textContent = overlayTextContents[index];

  overlayDiv.appendChild(overlayText);
  carouselItemDiv.appendChild(img);
  carouselItemDiv.appendChild(overlayDiv);
  carouselInnerDiv.appendChild(carouselItemDiv);
});

// Create carousel control elements
const prevControl = document.createElement('a');
prevControl.className = 'carousel-control-prev';
prevControl.href = '#imageCarousel';
prevControl.role = 'button';
prevControl.setAttribute('data-bs-slide', 'prev');

const prevIcon = document.createElement('span');
prevIcon.className = 'carousel-control-prev-icon text-success';
prevIcon.setAttribute('aria-hidden', 'true');

const prevText = document.createElement('span');
prevText.className = 'visually-hidden';
prevText.textContent = 'Previous';

prevControl.appendChild(prevIcon);
prevControl.appendChild(prevText);

const nextControl = document.createElement('a');
nextControl.className = 'carousel-control-next';
nextControl.href = '#imageCarousel';
nextControl.role = 'button';
nextControl.setAttribute('data-bs-slide', 'next');

const nextIcon = document.createElement('span');
nextIcon.className = 'carousel-control-next-icon text-success';
nextIcon.setAttribute('aria-hidden', 'true');

const nextText = document.createElement('span');
nextText.className = 'visually-hidden';
nextText.textContent = 'Next';

nextControl.appendChild(nextIcon);
nextControl.appendChild(nextText);

// Append all elements to the section
carouselDiv.appendChild(carouselInnerDiv);
carouselDiv.appendChild(prevControl);
carouselDiv.appendChild(nextControl);
section.appendChild(carouselDiv);

// Append the section to the document's body or another desired location
document.getElementsByTagName("main").appendChild(section);

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