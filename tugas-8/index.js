const readBooks = require('./callback.js')

let books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

book = () => {
    readBooks(10000, books[0], (sisaWaktu) => {
        readBooks(sisaWaktu, books[1], (sisaWaktu) => {
            readBooks(sisaWaktu, books[2], (sisaWaktu) => {
                readBooks(sisaWaktu, books[3], (sisaWaktu) => {
                })
            })
        })
    })

}
book()

