function n(dato){ 
   document.getElementById("operazioni").value += dato;
}
function operazione() { 
  const appross = eval(document.getElementById("operazioni").value)
  document.getElementById("operazioni").value = appross.toFixed(1); 
}
function cancella() { 
 document.getElementById("operazioni").value = ""; 
}

