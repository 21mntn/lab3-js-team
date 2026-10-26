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

tablica[20] = 'daleko';
console.log(tablica.length);
console.log(tablica[15]);
// po dodaniu tablica[20] dlugosc tablicy jest równa 21 a przy wieswietleniu 15-tego indexu wartość jest niezdefiniowana