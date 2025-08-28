// ...........................Reusable Function.................................

const getInnerValue = (id) => {
  return parseInt(document.getElementById(id).innerText);
};

const getInnerText = (id) => {
  return document.getElementById(id).innerText;
};

const setInnerText = (id, value) => {
  document.getElementById(id).innerText = value;
};

const getElem = (id) => {
  return document.getElementById(id);
};

// ..........................heartCount Function................................

const heartCount = () => {
  const heartCounts = getInnerValue("nav-heart") + 1;
  // console.log(heartCounts);
  setInnerText("nav-heart", heartCounts);
};

const allButtons = document.querySelectorAll(".heartIcon");

for (const button of allButtons) {
  button.addEventListener("click", function () {
    heartCount();
    // console.log(button.parentNode);
  });
}