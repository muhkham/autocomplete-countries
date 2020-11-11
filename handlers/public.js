const fs = require('fs');
const path = require('path')
const missingHandler = require('./missing')

const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg",
  };

function publicHandler(request, response){
    const url = request.url;
      const urlArray = request.url.split(".");
      const extension = urlArray[1]; 
      const type = types[extension]; 

      const filePath=path.join(__dirname,"..", url)
      console.log(url)
      fs.readFile(filePath,(err,data) => {
        if (err){
            missingHandler(request,response)
            return 
        }
   
    response.writeHead(200, { "content-type": type });
    response.end(data)
  })
}

module.exports = publicHandler;