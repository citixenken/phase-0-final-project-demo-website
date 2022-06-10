// const onMouseHover = document.getElementsByClassName("notice")[0];
// onMouseHover.addEventListener("mouseover", function () {
//   alert("!!! Site still under construction !!!");
// });

const onClick = document.getElementsByClassName("notice")[0];
const extraContent = document.getElementsByClassName("extra")[0];
onClick.addEventListener("click", function () {
  if (extraContent.style.display === "none") {
    onClick.textContent = "Close README.md";
    extraContent.style.display = "block";
    addImage(
      "./under-construction.jpg",
      "⚠️Gotcha!!! Site Under Construction⚠️"
    );
  } else {
    onClick.textContent = "Open README.md";
    extraContent.style.display = "none";
  }
});

function addImage(img_url, h2) {
  let image = document.querySelector("img");
  let banner = document.querySelector("h2");
  image.src = img_url;
  banner.textContent = h2;
}
