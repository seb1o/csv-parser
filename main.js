// function readCsvFromFile(filePath){

// }
const fs = require('fs');
function readCsvFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      
        if (err) {
            console.error('Error reading CSV file:', err.message);
            
            return;
        }
    })
}

function splitCsvInRows(csv){
    const rows = [];
    const lines = csv.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const row = lines[i].split(',');
      rows.push(row);
    }
  
    return rows;
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
    
    // const json = fromCsvToJson(csvData)
    // writeJsonToFile(filePath, json)

}

main()