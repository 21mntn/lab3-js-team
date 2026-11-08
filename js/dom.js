const iloscFormularzy = document.forms.length;
const iloscObrazkow = document.images.length;
const iloscOdnosnikow = document.links.length;

const akapityProjekt1 = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze na całej stronie:', iloscFormularzy);
console.log('Obrazki na całej stronie:', iloscObrazkow);
console.log('Odnośniki na całej stronie:', iloscOdnosnikow);
console.log('Akapity w sekcji #projekt1:', akapityProjekt1);