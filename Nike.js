const image = document.getElementById('shoes');
let rotationAngle = 0;
let zoomLevel = 1;

function updateImageTransform() {
  const transformValue = `rotate(${rotationAngle}deg) scale(${zoomLevel})`;
  image.style.transform = transformValue;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    rotationAngle -= 15;
    updateImageTransform();
  } else if (event.key === 'ArrowRight') {
    rotationAngle += 15; 
    updateImageTransform();
  } else if (event.key === 'ArrowUp') {
    zoomLevel += 0.1; 
    updateImageTransform();
  } else if (event.key === 'ArrowDown') {
    zoomLevel -= 0.1; 
    updateImageTransform();
  }
});
