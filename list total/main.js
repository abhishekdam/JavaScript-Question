let price = document.querySelectorAll(".amount");

let totalAmount = 0;

for (let index = 0; index < price.length; index++) {
  totalAmount += Number(price[index].textContent);
}

let table = document.getElementById("table");
let row = document.getElementsByClassName("tableRow");

let createRow = document.createElement("tr");
createRow.classList.add("tableRow");

const tdTotal = document.createElement("td");
tdTotal.textContent = "total";
const tdAmount = document.createElement("td");
tdAmount.textContent = totalAmount;

tdTotal.setAttribute("colspan", "2");
tdAmount.setAttribute("data-ns-test", "grandTotal");

table.appendChild(createRow);
createRow.appendChild(tdTotal);
createRow.appendChild(tdAmount);
