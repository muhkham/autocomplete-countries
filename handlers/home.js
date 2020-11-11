const fs = require('fs');
const path = require('path')
const missingHandler = require('./missing')
function homeHandler(request, response){
    const filePath= path.join(__dirname,'../front-end/index.html')
    fs.readFile(filePath,(err,data) => {
        if (err){
            missingHandler(request,response)
            return 
        }
    response.writeHead(200, { "content-type": "text/html" })
    response.end(data)
});
}

module.exports = homeHandler