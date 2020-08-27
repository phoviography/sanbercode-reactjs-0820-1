//soal 1
let firstNumber = 0;
let secondNumber = 22;

console.log('LOOPING PERTAMA');
while (firstNumber < 20) {
    firstNumber += 2
    console.log(`${firstNumber} I love coding`);
}

console.log('LOOPING KEDUA');
while (secondNumber > 2) {
    secondNumber -= 2
    console.log(`${secondNumber} I will become a frontend developer`)
}

//soal 2
let angka = 1;

for (angka; angka <= 20; angka++) {
    if (angka % 2 == 0) {
        console.log(`${angka} Berkualitas`);
    } else if (angka % 3 == 0) {
        console.log(`${angka} I Love Coding`);
    } else {
        console.log(`${angka} Santai`);
    }
}

//soal 3
let x = '';
for (let i = 0; i < 7; i++) {
    x = '#' + x
    console.log(x);
}

//soal 4
let kalimat = "saya sangat senang belajar javascript";
let stringToArray = kalimat.split(" ");

console.log(stringToArray);

//soal 5
let daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for(let i = 0; i < daftarBuah.length; i++){ 
    console.log(daftarBuah[i]);
}