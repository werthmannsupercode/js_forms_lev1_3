let age1 = document.getElementById('alter1');
let age2 = document.getElementById('alter2');
let ergebnis = document.getElementById('ergebnis');

function vergleich() {
    ergebnis.innerHTML = Math.abs(alter2.value - alter1.value);
}