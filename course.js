const con = document.getElementById("aaa");
const buttone = document.getElementById("ado");
const submit = document.getElementById("contat-submit");
const conten = document.getElementById("tx");
console.log("hello");
buttone.onclick = function () {
  console.log("hello");
  con.innerHTML += `
  <div class="sections">
  <div style="display: inline-block; width: 47.5%;">
    <fieldset class="user" id="o">
      <input
        class="a"
        placeholder="Organization name"
        type="text"
        tabindex="5"
        required
      />
    </fieldset>
  </div>
  <div style="display: inline-block; margin-left: 2%;"></div>
  <div style="display: inline-block; width: 47.5%;">
    <fieldset class="user">
      <input
        class="b"
        placeholder="Role.."
        type="text"
        tabindex="5"
        required
      />
    </fieldset>
  </div>

  <fieldset id="oo" class="user">
    From
    <input
      class="c"
      placeholder="from date"
      type="date"
      tabindex="5"
      required
    />

    - To
    <input
      class="d"
      placeholder="from date"
      type="date"
      tabindex="5"
      required
    />
    <input class="e" type="radio" value="Present" /> Present
  </fieldset>

  <fieldset class="user">
    <textarea
      class="f"
      placeholder="Description(Optional)"
      tabindex="5"
    ></textarea>
  </fieldset>
</div>
    `;
};
submit.onclick = function (event) {
  event.preventDefault();
  const groups = document.getElementsByClassName("sections");
  const agroup = document.getElementsByClassName("a");
  const bgroup = document.getElementsByClassName("b");
  const cgroup = document.getElementsByClassName("c");
  const dgroup = document.getElementsByClassName("d");
  const egroup = document.getElementsByClassName("e");
  const fgroup = document.getElementsByClassName("f");

  for (let i = 0; i < groups.length; i++) {
    var a = agroup[i].value;
    var b = bgroup[i].value;
    var c = cgroup[i].value;
    var d = dgroup[i].value;
    var e = egroup[i];
    var f = fgroup[i].value;
    conten.innerHTML += ` <br> Organization name : `;
    conten.innerHTML += a;
    conten.innerHTML += `<br>Role : `;
    conten.innerHTML += b;
    conten.innerHTML += `<br>From : `;
    conten.innerHTML += c;
    conten.innerHTML += ` To : `;
    conten.innerHTML += d;

    if (e.checked) {
      conten.innerHTML += e.value;
    }

    conten.innerHTML += `<br> Description : `;
    conten.innerHTML += f;
  }
};
