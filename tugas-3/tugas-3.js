//soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let gabungKata = `${kataPertama} ${(capitalizeFirstLetter(kataKedua))} ${kataKetiga} ${(kataKeempat).toUpperCase()}`; //saya Senang belajar JAVASCRIPT

console.log(gabungKata);


//soal 2

var angkaPertama = "1";
var angkaKedua = "2";
var angkaKetiga = "4";
var angkaKeempat = "5";

let penjumlahan = parseInt(angkaPertama) + parseInt(angkaKedua) + parseInt(angkaKetiga) + parseInt(angkaKeempat); //12
console.log(penjumlahan);


//soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); //Kata Pertama: wah
console.log('Kata Kedua: ' + kataKedua); //Kata Kedua: javascript
console.log('Kata Ketiga: ' + kataKetiga); // Kata Kedua: itu
console.log('Kata Keempat: ' + kataKeempat); //Kata Keempat: keren
console.log('Kata Kelima: ' + kataKelima); //Kata Kelima: sekali

//soal 4
let nilai = 45;

if (nilai >= 80) {
    console.log("indeks nilai A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("indeks nilai B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("indeks nilai C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("indeks nilai D");
} else {
    console.log("indeks nilai E");
}

//soal 5
var tanggal = 2;
var bulan = 5;
var tahun = 1988;

var namaBulan;
switch (bulan) {
    case 1:
        namaBulan = 'Januari';
        break;
    case 2:
        namaBulan = 'Februari';
        break;
    case 3:
        namaBulan = 'Maret';
        break;
    case 4:
        namaBulan = 'April';
        break;
    case 5:
        namaBulan = 'Mei';
        break;
    case 6:
        namaBulan = 'Juni';
        break;
    case 7:
        namaBulan = 'Juli';
        break;
    case 8:
        namaBulan = 'Agustus';
        break;
    case 9:
        namaBulan = 'September';
        break;
    case 10:
        namaBulan = 'Oktober';
        break;
    case 11:
        namaBulan = 'November';
        break;
    case 12:
        namaBulan = 'Desember';
        break;
    default:
        namaBulan = 'Invalid';
}

var tanggalLahir = `${tanggal} ${namaBulan} ${tahun}`
console.log(tanggalLahir);
