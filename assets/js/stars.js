
document.addEventListener("DOMContentLoaded", () => {
    function createStars(containerId, count, size) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }

  createStars("stars", 1000, 1);
  createStars("stars2", 500, 2);
  createStars("stars3", 200, 3);
});
