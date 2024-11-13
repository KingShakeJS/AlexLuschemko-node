const fs = require('fs')
const path = require('path')
const student = require('./my.json')

const csv = require('csv-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// записать json файл

// const man = {
//     name: 'Alex',
//     age: 22,
//     department: 'History',
//     car: 'vaz'
// }

// fs.writeFile('my.json', JSON.stringify(man), (err) => {
//     err && console.log(err)
// })

//читаум json

// console.log(student)

// читать CSV

// const result = []
// fs.createReadStream('myCsv.csv')
//     .pipe(csv())
//     .on('data', data => result.push(data))
//     .on('end', () => {
//         console.log(result)
//     })


// пишем CSV

const csvWriter = createCsvWriter({
    path: 'file.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'age', title: 'AGE'}
    ]
});

const data = [
    {name: 'ddd', age: 21},
    {name: 'dd', age: 231},
    {name: 'ff', age: 251},
    {name: 'fg', age: 213},
    {name: 'ddbbd', age: 2341},
]

csvWriter.writeRecords(data)
    .then(() => {
        console.log('...Done');
    });