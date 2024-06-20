//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
let inp_as = document.getElementById("a_size"),
  array_size = inp_as.value;
const inp_gen = document.getElementById("a_generate");
const inp_aspeed = document.getElementById("a_speed");

const stop_btn = document.getElementById("a_stop");

const butts_algos = document.querySelectorAll(".algos button");

let div_sizes = [];
let divs = [];
let margin_size;
const cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);
stop_btn.addEventListener("click",()=> window.location.reload())

function generate_array() {
  cont.innerHTML = "";

  for (let i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:blue; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for (let i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", run_algo);
}

function disable_buttons() {
  for (let i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add("butt_locked");

    butts_algos[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
  }
}

function run_algo() {
  disable_buttons();

  stop_btn.style.opacity = 1;

  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      stop_btn.style.display = 0;

      break;
    case "Selection":
      Selection_sort();
      stop_btn.style.display = 0;

      break;
    case "Insertion":
      Insertion();
      stop_btn.style.display = 0;

      break;
    case "Merge":
      Merge();
      stop_btn.style.display = 0;

      break;
    case "Quick":
      Quick();
      stop_btn.style.display = 0;

      break;
    case "Heap":
      Heap();
      stop_btn.style.display = 0;

      break;
  }
}
