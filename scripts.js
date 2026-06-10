document.addEventListener("DOMContentLoaded", () => {
  const profileImages = [
    "images/profile/grad.jpg",
    "images/profile/bird.jpg",
    "images/profile/aurora.jpg",
    "images/profile/bamboo.jpg",
    "images/profile/cloudforest.jpg",
    "images/profile/cooking.jpg",
    "images/profile/elephant.jpg",
    "images/profile/green.jpg",
    "images/profile/iceclimb.jpg",
    "images/profile/profile.jpg",
    "images/profile/totoro.jpg",
  ];

  const wrapper = document.getElementById("profile-pic-wrapper");
  if (!wrapper || profileImages.length === 0) return;

  const imgs = profileImages.map((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Alexander Joos";
    img.className = "profile-pic" + (i === 0 ? " active" : "");
    wrapper.appendChild(img);
    return img;
  });

  if (imgs.length <= 1) return;

  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove("active");
    current = (current + 1) % imgs.length;
    imgs[current].classList.add("active");
  }, 8000);
});
