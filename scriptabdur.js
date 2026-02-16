document.addEventListener("DOMContentLoaded", function () {
  const giftContainer = document.getElementById("gift-container");
  const card = document.querySelector(".card");
  const music = document.getElementById("musik");

  // Fungsi saat kado diklik
  giftContainer.addEventListener("click", function () {
    // 1. Mulai putar musik
    music.play().catch((error) => {
      console.log("Autoplay dicegah browser, user harus interaksi dulu.");
    });

    // 2. Tambahkan animasi menghilang pada kado
    giftContainer.classList.add("active");

    // 3. Hapus class hidden pada kartu agar muncul perlahan
    card.classList.remove("hidden-content");
  });
});
