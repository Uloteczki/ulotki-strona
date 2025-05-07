document.getElementById("formKalkulator").addEventListener("submit", function(e) {
  e.preventDefault();
  const typ = document.getElementById("typ").value;
  const ilosc = parseInt(document.getElementById("ilosc").value);
  let cena = 0;

  if (typ === "mieszkania") cena = ilosc * 0.30;
  else if (typ === "domy") cena = ilosc * 0.40;
  else if (typ === "wioski") cena = ilosc * 0.45;

  document.getElementById("wynik").textContent = `Cena: ${cena.toFixed(2)} zł`;
});
