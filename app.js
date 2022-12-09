const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("page/home.html", (err,data) => {
            if (err) throw err;
            res.write(data)
        })
    }
    if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>About Us<h1>")
        
      
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>Page not found<h1>")
        
        }
        res.end()   
}); 

server.listen(3000);