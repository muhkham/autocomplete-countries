const homeHandler = require("./handlers/home");
const missingHandler = require("./handlers/missing");
const submitHandler = require("./handlers/submit");
const publicHandler = require("./handlers/public")
const getdataHandler = require("./handlers/getdata")

function router(request, response) {
  const url = request.url;
  const method = request.method;
  if (url === "/") {
    homeHandler(request, response);
  }
  else if (url.includes('front-end')){
    publicHandler(request, response)
  }
  else if(url.includes('submit')) {
    submitHandler(request, response);
  }
    else if(url.includes('getdata')) {
      getdataHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
