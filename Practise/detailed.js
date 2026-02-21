// Video Modalı idarə etmək üçün funksiya
function toggleVideo() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("youtubeFrame");

  // Toggle class
  modal.classList.toggle("active");

  // Modalı bağlayanda videonu dayandırmaq üçün (səsi kəsmək)
  if (!modal.classList.contains("active")) {
    const currentSrc = iframe.src;
    iframe.src = "";
    iframe.src = currentSrc;
  }
}

// Düymələrə klik effektləri üçün sadə animasiya (əlavə)
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});
