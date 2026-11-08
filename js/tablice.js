const tablica = ['Kebab' , 'Pizza' , 'Carbonara' , 'Burger' , 'Schabowy']
console.log(tablica);
console.table(tablica);

tablica[tablica.length - 1] = 'Ogórkowa';
console.log(tablica[tablica.length - 1]);

tablica[5] = 'nowy6';
console.log(tablica.length);

tablica[tablica.length] = 'nowy7'
console.log(tablica.length);

tablica.push('nowy8' , 'nowy9' , 'nowy10' , 'nowy11');
console.log(tablica.length);

const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);

document.write('<p>Tablica: ' + tablica.join(', '));
document.write(' (elementów: ' + tablica.length + ')</p>');

const nowaTablica = ['Komputer','Tablet','Laptop','Samochod']
document.write('<p>Pierwszy element to <strong>');
document.write(nowaTablica[0] + '</strong></p>');

document.write('<p>Ostatni element to <strong>' +  nowaTablica[nowaTablica.length -1 ] + '</strong></p>')

nowaTablica.unshift('Motor');
document.write('<p>Nowy pierwszy element to : <strong>' + nowaTablica[0] + '</strong></p>');
