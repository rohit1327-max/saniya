// Photo list
const photos = [
  "photo.jpeg.JPG"
];

let currentPhoto = 0;

// Find image element
const img = document.getElementById("photo");

if (img) {
  img.src = photos[currentPhoto];
}

// Change photo function (if you add more photos later)
function nextPhoto() {
  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  if (img) {
    img.src = photos[currentPhoto];
  }
}

// Button function
const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {
  nextBtn.addEventListener("click", nextPhoto);
}