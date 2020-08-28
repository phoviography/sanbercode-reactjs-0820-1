// soal 1
function halo() {
    console.log("Halo Sanbers!") 
}
halo();

//soal 2
function kalikan (num1, num2) {
    return num1 * num2
}
var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

//soal 3
function introduce(name, age, address ,hobby) {
    // return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address} dan saya punya hobby yaitu ${hobby}!`
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby + '!'
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var personObj = {
    name : "Asep",
    gender: "Laki-laki",
    hobby: "Baca buku",
    yearOfBirth: 1992
}

console.log(personObj)
console.log(personObj.name) // Asep
console.log(personObj.gender) // Laki-laki 
console.log(personObj.hobby) // Baca buku
console.log(personObj.yearOfBirth) // 1992

//soal 5
var dataBuah = [
    {nama: "Strawberry", warna: "merah", biji: "tidak ada", harga: 9000},
    {nama: "Jeruk", warna: "orange", biji: "ada", harga: 8000},
    {nama: "Semangka", warna: "hijau & merah", biji: "ada", harga: 10000},
    {nama: "Pisang", warna: "Kuning", biji: "tidak ada", harga: 5000}
]
console.log(dataBuah[0])

//soal 6
var dataFilm = []

function tambahFilm() { 
    dataFilm.push(
    {title: "Mulan", duration: 2, genre: "action", year: 2020},
    {title: "Titanic", duration: 3, genre: "romance", year: 1997},
    {title: "The Wolf of Wall Street", duration: 2, genre: "biography", year: 2013}
    );
    console.log(dataFilm)
}
tambahFilm();