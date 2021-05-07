let count = 0;

document.getElementById("increment").addEventListener("click", function () {
  count += 1;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrement").addEventListener("click", function () {
  if (count > 0) {
    count -= 1;
    document.getElementById("counter").textContent = count;
  }
});
