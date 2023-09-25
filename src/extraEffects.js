// Easter egg code

document.addEventListener('DOMContentLoaded', function () {
const brandImage = document.getElementById("brand-image");

  let rotationDegree = 0;

  brandImage.addEventListener("click", (event) => {
    rotationDegree += 360; // Rotate by 360 degrees on each click
    brandImage.style.transform = `rotate(${rotationDegree}deg)`;
  });
});