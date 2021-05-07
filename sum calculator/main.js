let sum = 0;
document.getElementById("mybtn").addEventListener("click", function () {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");

  sum = Number(num1.value) + Number(num2.value);
  console.log(sum);
  let dull = document.getElementById("result");
  //   dull.removeAttribute("disabled");
  dull.value = sum;
});
