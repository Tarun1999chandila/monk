window.onload = function () {
  const buton = document.getElementById("contact-submit");
  const conent = document.getElementById("i");

  buton.onclick = function (event) {
    event.preventDefault();
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementsByName("t");
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    var g = document.getElementById("g").value;
    var h = document.getElementById("h").value;
    for (j = 0; j < d.length; j++)
      if (d[j].checked) content.innerHTML = "<br> Gender : " + d[j].value;
    conent.innerHTML += ` <br> Name : `;
    conent.innerHTML += a;
    conent.innerHTML += `<br>Occupation : `;
    conent.innerHTML += b;
    conent.innerHTML += `<br>Phone no : `;
    conent.innerHTML += c;

    conent.innerHTML += `<br>Email id : `;
    conent.innerHTML += e;
    conent.innerHTML += `<br>Github : `;
    conent.innerHTML += f;
    conent.innerHTML += `<br>LinkedIn : `;
    conent.innerHTML += g;
    conent.innerHTML += `<br>Address : `;
    conent.innerHTML += h;
  };
};
