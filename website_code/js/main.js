const themeToggle = document.getElementById('theme_toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data_theme', savedTheme); 
}

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

const slideshow_images = [
  '../files/image_1.jpg',
  '../files/image_2.jpg',
  '../files/image_3.jpg',
  '../files/image_4.jpg'
];

let currentSlide = 0; 

function change_slide() {
  const slideshow = document.querySelector('.slideshow');
  slideshow.style.backgroundImage = `url(${slideshow_images[currentSlide]})`;
  currentSlide = (currentSlide + 1) % slideshow_images.length;
}

change_slide();
setInterval(change_slide, 5000);


function update_layout() { // needed because of breaking when in mobile mode
  const card = document.querySelector('.card');
  

  const windowWidth = window.innerWidth;
  

  if (windowWidth < 600) {
      card.style.width = '100%';
  } else if (windowWidth < 1200) {
      card.style.width = '90%';
  } else {
      card.style.width = '80%'; 
  }
}

window.addEventListener('resize', update_layout); // this fixed it 

window.addEventListener('load', update_layout);