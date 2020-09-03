const readBooksPromise = require('./promise.js')

let books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

book = () => {
    readBooksPromise(10000, books[0])
        .then((sisaWaktu) => readBooksPromise(sisaWaktu, books[1]))
        .then((sisaWaktu) => readBooksPromise(sisaWaktu, books[2]))
        .catch((sisaWaktu) => console.log(sisaWaktu))
}
book()