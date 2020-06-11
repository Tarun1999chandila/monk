const conp = document.getElementById("abc");
const buttono = document.getElementById("adx");
const submitee = document.getElementById("contac-submit");
const contnt = document.getElementById("tr");

buttono.onclick = function () {
  conp.innerHTML += `   
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
        placeholder="Degree type"
        type="text"
        tabindex="5"
        required
      />
    </fieldset>
  </div>

  <div style="display: inline-block; width: 47.5%;">
    <fieldset class="user" id="o">
      <input
        class="c"
        placeholder="Study Program"
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
        class="d"
        placeholder="%age / Cgpa(Optional)"
        type="text"
        tabindex="5"
        required
      />
    </fieldset>
  </div>
  <fieldset id="oo" class="user">
    From
    <input
      class="e"
      placeholder="from date"
      type="date"
      tabindex="5"
      required
    />

    - To
    <input
      class="f"
      placeholder="from date"
      type="date"
      tabindex="5"
      required
    />

    <input class="g" type="radio" value="Present" /> Present
  </fieldset>

  <fieldset class="user">
    <textarea
      class="h"
      placeholder="Description(Optional)"
      tabindex="5"
    ></textarea>
  </fieldset>
</div>  
`;
};
submitee.onclick = function (event) {
  event.preventDefault();
  var groups = document.getElementsByClassName("sections");
  var agroup = document.getElementsByClassName("a");
  var bgroup = document.getElementsByClassName("b");
  var cgroup = document.getElementsByClassName("c");
  var dgroup = document.getElementsByClassName("d");
  var egroup = document.getElementsByClassName("e");
  var fgroup = document.getElementsByClassName("f");
  var ggroup = document.getElementsByClassName("g");
  var hgroup = document.getElementsByClassName("h");
  for (let i = 0; i < groups.length; i++) {
    var a = agroup[i].value;
    var b = bgroup[i].value;
    var c = cgroup[i].value;
    var d = dgroup[i].value;
    var e = egroup[i].value;
    var f = fgroup[i].value;
    var g = ggroup[i];
    var h = hgroup[i].value;
    contnt.innerHTML += ` <br> Organization name : `;
    console.log(a);
    contnt.innerHTML += a;
    contnt.innerHTML += `<br>Degree type : `;
    console.log(b);

    contnt.innerHTML += b;
    contnt.innerHTML += `<br>Study Program : `;
    console.log(c);

    contnt.innerHTML += c;
    contnt.innerHTML += `<br>%Age/Cgpa : `;
    console.log(d);

    contnt.innerHTML += d;
    contnt.innerHTML += `<br>From : `;
    console.log(e);

    contnt.innerHTML += e;
    contnt.innerHTML += `   To : `;
    console.log(f);

    contnt.innerHTML += f;

    if (g.checked) {
      contnt.innerHTML += g;
    }

    contnt.innerHTML += `<br>Description : `;
    console.log(h);

    contnt.innerHTML += h;
  }
};
