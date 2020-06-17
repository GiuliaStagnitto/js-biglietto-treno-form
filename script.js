var creaBtn = document.getElementById('creaBiglietto');
creaBtn.addEventListener("click", function () {
  var prezzoTotale;
  var prezzoKm = 0.21;
  var prezzoScontato;

  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var categoria = document.getElementById('categoria').value;
  var minCarrozza = 1 ;
  var maxCarrozza = 10 ;
  var minNumTreno = 90000 ;
  var maxNumTreno = 100000 ;

  prezzoTotale= km * prezzoKm;

  if (categoria == "Minorenne") {
    prezzoScontato = prezzoTotale * 0.2;
  } else if (categoria == "Over65"){
    prezzoScontato = prezzoTotale * 0.4;
  } else {
    prezzoScontato = prezzoTotale;
  }

  var numTreno = Math.floor(Math.random()* (maxNumTreno - minNumTreno + 1)) + minNumTreno;
  var carrozza = Math.floor(Math.random()* (maxCarrozza - minCarrozza + 1)) + minCarrozza;

  document.getElementById('passeggero').innerHTML = nome;
  document.getElementById('numeroTreno').innerHTML = numTreno;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('prezzoBiglietto').innerHTML = prezzoScontato;
  document.getElementById('categoriaPasseggero').innerHTML = categoria;


  console.log(nome);
  console.log(numeroTreno);
  console.log(carrozza);
  console.log(prezzoTotale);
  console.log(categoria);

})
