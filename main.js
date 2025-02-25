// function readCsvFromFile(filePath){

// }
const fs = require('fs');
const { json } = require('stream/consumers');
function readCsvFile(filePath) {
    const csvData = fs.readFileSync(filePath,'utf8');
    return csvData;
//     fs.readFile(filePath, 'utf8', (err, data) => {
      
//         if (err) {
//             console.error('Error reading CSV file:', err.message);
            
//             return;
//         }
//     })
}

function writeJsonToFile(filePath) {
   fs.writeFileSync(filePath,json,'utf8');
    
}
function splitCsvInRows(csv){
    // const rows = [];
    const lines = csv.split(/\r?\n/);
    
    // for (let i = 0; i < lines.length; i++) {
    //   const row = lines[i].split(',');
    //   rows.push(row);
    // }
  
    return lines;
}

function splitRows(csvArrayOfString){
    const newArrayRow = [];
     for (let i = 0; i < csvArrayOfString.length; i++) {
        const newRow = csvArrayOfString[i].split(',');
         newArrayRow.push(newRow);
     }
     
     return newArrayRow;
 }
function getKeysFromFirstLine(arrayOfArray){
    const keys = arrayOfArray[0]
    console.log(keys)
    return keys
}

function getValues(arrayOfArray){
    const values = arrayOfArray.slice(1)
    console.log(values)
    return values

}

function createEntry(keys, valueArray){
    const entryArray = {}
    for (let i = 0; i < keys.length; i++) {
        const valeu = valueArray[i];
        keys[i] = valeu

       
        
    }
    return entryArray
}

function createArrayOfEntries(keys, values){
    const arrayOfEntries = []
    for (let i = 0; i < values.length; i++) {
        const valueArray = values[i];
        const entry = createEntry(keys, valueArray)
        arrayOfEntries.push(entry)
        
    }
    return arrayOfEntries
}

function convertArrayToJson(arrayFromEntries){
    return JSON.stringify(arrayFromEntries)

    
}
function fromCsvToJson(csv){
    

     const arrayOfStringRow = splitCsvInRows(csv)

    const arrayOfSplittedRows = splitRows(arrayOfStringRow)
    

    const keys = getKeysFromFirstLine(arrayOfSplittedRows)


   const values = getValues(arrayOfSplittedRows)
 const arrayFromEntries = createArrayOfEntries(keys, values);
    // [

    //     {
    //         name: "lorenzo"
    //     }
    // ]

     const json = convertArrayToJson(arrayFromEntries)
     return json
} 




function main(){

    const csvData = readCsvFile("./data/test1.csv");
    
  const json = fromCsvToJson(csvData)
    writeJsonToFile('./output/test1.json', json)

}

main()