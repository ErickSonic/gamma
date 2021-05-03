document.getElementById("btn").onclick = function(){
  var input = parseInt(document.getElementById("num").value);
  document.getElementById("res").innerHTML = "Función Gamma de: " + input + " = " + math.gamma(input);
}
