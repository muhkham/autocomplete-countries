const myCountriesData = require("../country-by-name.json");

function submitHandler(request, response) {
  const search = new URLSearchParams(request.url.split("?")[1]);
  const country = search.get("name").toLowerCase();
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(autoComplete(country)));
}

function autoComplete(country) {
  return myCountriesData.filter((item) => {
    if (item["country"].toLowerCase().startsWith(country)) {
      return item;
    }
  });
}

module.exports = submitHandler;
