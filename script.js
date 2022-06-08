console.log("Hello 🌎");
 
  function openChat(){
  document.getElementById("jsadminchat").style.display = "block";
  console.log("chat aberto!");
}

function closeChat(){
  document.getElementById("jsadminchat").style.display = "none";
  console.log("chat fechado!");
}

var batepapoDescer = document.querySelector("#jsDescerBatePapo");
batepapoDescer.addEventListener("click", function() {
    window.scrollTo(0, 2000);
  console.log("Usuario redirecionado para bate-papo!");
});