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

document.querySelector(".chat-bubble").addEventListener("click", function (e) {
    e.preventDefault();

    const individualSelect = document.getElementById("individual");
    const extrasSelect = document.getElementById("extras");

    const individualText = individualSelect.options[individualSelect.selectedIndex].text;
    const extrasText = extrasSelect.options[extrasSelect.selectedIndex].text;

    const individualValue = parseInt(individualSelect.value) || 0;
    const extrasValue = parseInt(extrasSelect.value) || 0;
    const total = individualValue + extrasValue;

    const message = `¡Hola! Me interesa un Funko personalizado.\n\n🧍 Opción: ${individualText}\n🎁 Extras: ${extrasText}\n💰 Precio total: ${total}€`;

    fetch("https://api.telegram.org/bot7783243051:AAHm4zCiX9c0jHneCCMHSgF3kdH5Ke6RaXI/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: 7534454788,
            text: message
        })
    })
    .then(() => {
        alert("Mensaje enviado por Telegram 📩");
    })
    .catch(err => {
        alert("Error al enviar mensaje 😢");
        console.error(err);
    });
});


setInterval(nextImage, 2000);