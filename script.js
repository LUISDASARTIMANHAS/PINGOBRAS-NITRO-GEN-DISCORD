console.log("Hello 🌎");
 
function openForm2() {
  document.getElementById("jschat2").style.display = "block";
  console.log("chat aberto!");
}

function closeForm2() {
  document.getElementById("jschat2").style.display = "none";
  console.log("chat fechado");
}

var batepapoDescer = document.querySelector("#jsDescerBatePapo2");
batepapoDescer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("Usuario redirecionado para bate-papo!");
});