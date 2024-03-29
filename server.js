const csv = require("csv-parser")
const fs = require("fs")
const createCsvWriter = require('csv-writer').createObjectCsvWriter


const csvWriter = createCsvWriter({
    path: './out.csv',
    header:[
        {id: 'name', title: 'Name'},
        {id: 'mobile', title: 'Mobile'},
        {id: 'address', title: 'Address'},
        {id: 'email', title: 'Email'},
        
    ]
}) 

const data = [
    {
        name: 'John',
        surname: 'Snow',
        age: 26,
        gender: 'M'
      }, {
        name: 'Clair',
        surname: 'White',
        age: 33,
        gender: 'F',
      }, {
        name: 'Fancy',
        surname: 'Brown',
        age: 78,
        gender: 'F'
      }
]

csvWriter.writeRecords(data)
.then(()=>console.log('The CSV file was written successfully.'))

fs.createReadStream('./out.csv')
.pipe(csv())
.on('data', (row)=>{
    console.log(row)
}).on('end',()=>{
    console.log('CSV file successfully processed')
})