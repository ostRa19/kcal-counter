let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 10;
  countEl.textContent = count;
}

function save() {
  let currCount = " " + count + " - ";
  saveEl.textContent += currCount;
  count = 0;
  countEl.textContent = count;
}
