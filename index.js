const dataFeed = document.querySelector(".data-feed-from-calender");

console.log("hello world");

const boxes = document.querySelectorAll(".box");

function calcRgb() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  return [r, g, b];
}

const overlayWindow = document.querySelector(".outter-window");

boxes.forEach(box => {
  let data;
  const color1 = `rgba(${calcRgb()[0]},${calcRgb()[1]},${calcRgb()[2]},0.9)`;
  const color2 = `rgba(${calcRgb()[0]},${calcRgb()[1]},${calcRgb()[2]},0.8)`;
  console.log(color1, color2);
  box.style.background = `linear-gradient(to left,${color1},${color2})`;
  box.addEventListener("click", () => {
    data = box.textContent + "";
    console.log("Clicking box " + box.textContent);
    dataFeed.innerHTML = data;
    overlayWindow.classList.remove("window--hidden");
  });
});

function intervalFunc() {
  boxes.forEach(box => {
    const color1 = `rgba(${calcRgb()[0]},${calcRgb()[1]},${calcRgb()[2]},0.9)`;
    const color2 = `rgba(${calcRgb()[0]},${calcRgb()[1]},${calcRgb()[2]},0.8)`;
    console.log(color1, color2);
    box.style.background = `linear-gradient(to left,${color1},${color2})`;
  });
}
setInterval(intervalFunc, 1500);

// adding close button  functionality

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  overlayWindow.classList.add("window--hidden");
});

overlayWindow.addEventListener("click", () => {
  overlayWindow.classList.add("window--hidden");
});
// feeding data from the calender
