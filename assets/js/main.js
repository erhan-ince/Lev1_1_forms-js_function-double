let doppel = document.getElementById('doppel');
let result = document.getElementById('result');
function convert() {
   console.log('its working');
   let ergeb;
   ergeb = doppel.value * 2;
   console.log(ergeb);
   result.innerHTML = ergeb.toFixed(2);
}
