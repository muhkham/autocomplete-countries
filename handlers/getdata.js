
const https = require("https");


function getdataHandler(request, response) {
    const search = new URLSearchParams(request.url.split("?")[1]);
    const country = search.get("name").toLowerCase();
    const url_new= `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    response.writeHead(200, { "content-type": "application/json" });
    // response.end(JSON.stringify(myRequest(ur_new,country)));
    myRequest(url_new)
    .then(function(data) {
        response.end(JSON.stringify(data))
    })
    .catch(function(error) {
        console.log(error);
      })
  }

  const myRequest = (url, cb) => {
    return new Promise((resolve, reject) => {
      https
        .get(url, response => {
          let data = "";
          response.on("data", chunk => {
            data += chunk;
          });
          response.on("end", () => {
            const body = JSON.parse(data);
            const statusCode = response.statusCode;
            resolve({ statusCode, body });
          });
        })
        .on("error", reject);
    });
  };

  
  module.exports = getdataHandler