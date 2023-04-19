function more(id) {
  console.log(id)
  const element = document.getElementById(id);
  const dots = element.querySelector("#dots");
  const moreText = element.querySelector(".more");
  const btnText = element.querySelector(".btn-more");

  if (element.classList.contains("active")) {
    element.classList.remove("active");
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    $('#'+id).animate({'height': 136}, 300);
  } else {
    element.classList.add("active");
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    var fullHeight = element.querySelector(".block").offsetHeight;
    $('#'+id).css({'height': 136, 'max-height': 'none'}).animate({'height': fullHeight}, 300);
  }
}

