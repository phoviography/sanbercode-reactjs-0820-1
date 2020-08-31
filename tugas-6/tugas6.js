//tugas 1
const phi = 3.14

const hitungKelilingLingkaran = jariJari => phi * 2 * jariJari;
console.log(`Keliling Lingkaran ${hitungKelilingLingkaran(5)}`); //31.4

const hitungLuasLingkaran = jariJari => phi * Math.pow(jariJari, 2);
console.log(`Luas Lingkaran ${hitungLuasLingkaran(5)}`); //78.5

//tugas2
let kalimat = ""
const tambahKalimat = (...args) => {
    args.filter(kata => kalimat = kalimat += `${kata} `)
    return kalimat
}
console.log(tambahKalimat("saya", "adalah", "seorang", "frontend", "developer"));


//tugas3
const newFunction = (firstName, lastName) => {
    return {
        fullName: () => console.log(`${firstName} ${lastName}`)
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName() //William Imoh

//tugas 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject

// Spell Code
console.log(firstName, lastName, destination, occupation) //Harry Potter Holt Hogwarts React Conf Deve-wizard Avocado

//tugas 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined) // [ "Will", "Chris", "Sam", "Holly", "Gill", "Brian", "Noel", "Maggie" ]