let current = 0;
const images = document.querySelectorAll(".carousel-img");

function updateCarousel() {
  images.forEach((img, index) => {
    img.classList.remove("active", "prev", "next");
    if (index === current) {
      img.classList.add("active");
    } else if (index === (current - 1 + images.length) % images.length) {
      img.classList.add("prev");
    } else if (index === (current + 1) % images.length) {
      img.classList.add("next");
    }
  });
}
function nextImage() {
  current = (current + 1) % images.length;
  updateCarousel();
}
updateCarousel();

["individual", "extras"].forEach(id => {
  document.getElementById(id).addEventListener("change", calculateTotal);
});

function calculateTotal() {
  const individual = parseInt(document.getElementById("individual").value) || 0;
  const extras = parseInt(document.getElementById("extras").value) || 0;
  const total = individual + extras;
  document.getElementById("total").textContent = `Total: ${total}€`;
}

setInterval(nextImage, 2000);