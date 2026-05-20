function showMore() {

  const moreText = document.getElementById("more");
  const btn = document.getElementById("showBtn");

  moreText.classList.toggle("show");

  if (moreText.classList.contains("show")) {
    btn.textContent = "Show Less";
  } else {
    btn.textContent = "Show More";
  }
}
