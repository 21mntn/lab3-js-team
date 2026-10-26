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