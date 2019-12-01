const { readFile, writeFile } = require("fs");
const https = require("https");
const { join } = require("path");
const { resolve } = require("url");

const SWAPI_URL = "https://swapi.co/api/";

/* 
apiGet returns a promise containing the data from path requested by the user
*/
function apiGet(path) {
  return new Promise((onResolve, onReject) =>{
    const request = https
    .get(
      resolve(SWAPI_URL, path),
      { headers: { Accept: "application/json" } },
      resp => {
        let data = "";

        resp.on("data", chunk => {
          data += chunk;
        });

        resp.on("end", () => {
          onResolve( data ? JSON.parse(data) : null); // send parsed json data
        });
      }
    )
    request.on("error", err => {
      onReject(err); //
    });
  });
}

/* 
getPerson takes in a character name and returns the data for the character (if any)
*/

function getPerson(query) {
  return new Promise((onResolve, onReject)=>{
    apiGet("people/?search=" + query)
  .then((data) => {
    const person = data.results;
    onResolve(person);
  })
  .catch(err => onReject(err));
  })
}


/* 
Read file and split the data
*/
function readSearchTerms() {
  return new Promise((onResolve, onReject) =>{

    readFile(join(__dirname, "search.txt"), { encoding: "utf8" }, (err, data) => {
  
        const nonEmptyLines = data.split("\n").filter(line => Boolean(line))
        
        onResolve(nonEmptyLines);
        onReject(err);
    });
  })
  
}

// save names of characters. return promise once file is written

function saveNames(people) {
  console.log(`Saving ${people.length} results`);
  return new Promise((onResolve, onReject) => {
    data = people.map(p => (p ? p.name : "No results")).join("\n");
    writeFile(join(__dirname, "names.txt"), data, { encoding: "utf8" }, (err) => {
      if(err){
        onReject(err);
      } else {
        onResolve("File Written Successfully!");
      }
    });
  })
}


/*
main program does the following - 
1. readSearchTerms from file
2. on succes, assign file content to terms 
3. Map terms and get data for each character using getPerson function
4. on success, push it to an empty array
5. Write values to file using saveNames function. 
*/

function main() {
  // 1. Read the search terms in
  // 2. Run the searches in parallel
  // 3. Save the results to a file
  // NOTE: retain console output order
  console.log("Searching...");
  
  let terms='';
  let people = [];
   readSearchTerms()
    .then((data)=>{
      terms = data;
      terms.map(async (term)=>{
        await getPerson(term)
        .then((person) =>{ 
          people.push(person[0]);
          if(people.length === terms.length){
          saveNames(people)
          .then(() =>console.log('Done'));
      }
        })
      })
  })
    .catch(err => console.log(err));
}

main();
