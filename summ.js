const butto = document.getElementById("contactsubmit");
const context = document.getElementById("ttx");

butto.onclick = function (event) {
  event.preventDefault();
  var x = document.getElementById("r").value;

  context.innerHTML += `<br> Summary : `;
  context.innerHTML += x;
};
