const posts = document.querySelectorAll(".post");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.querySelector(".close");

posts.forEach(post => {
  post.addEventListener("click", () => {

    const img = post.querySelector("img");
    const video = post.querySelector("video");

    modal.style.display = "block";

    if (img) {
      modalImg.src = img.src;
      modalImg.style.display = "block";
      modalVideo.style.display = "none";
    }

    if (video) {
      modalVideo.src = video.src;
      modalVideo.style.display = "block";
      modalImg.style.display = "none";
      modalVideo.play();
    }

  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  modalVideo.pause();
};

