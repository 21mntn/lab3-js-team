const iloscFormularzy = document.forms.length;
const iloscObrazkow = document.images.length;
const iloscOdnosnikow = document.links.length;

const akapityProjekt1 = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze na całej stronie:', iloscFormularzy);
console.log('Obrazki na całej stronie:', iloscObrazkow);
console.log('Odnośniki na całej stronie:', iloscOdnosnikow);
console.log('Akapity w sekcji #projekt1:', akapityProjekt1);

const akapitLicznik = document.getElementById('licznik');

if (akapitLicznik) {
  akapitLicznik.innerHTML = `
    <strong>Podsumowanie elementów DOM na stronie:</strong><br>
    • Formularze na całej stronie: <strong>${iloscFormularzy}</strong><br>
    • Obrazki na całej stronie: <strong>${iloscObrazkow}</strong><br>
    • Odnośniki na całej stronie: <strong>${iloscOdnosnikow}</strong><br>
    • Akapity wewnątrz sekcji #projekt1: <strong>${akapityProjekt1}</strong>
  `;
}