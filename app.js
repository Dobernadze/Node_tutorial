const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
    
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile('page/home.html','utf8', (err,data) => {
            if (err) throw err;
            res.write(data)
            res.end()
        })
    }
   
   else if(req.url === "/about"){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('page/about.html','utf8', (err,data) => {
        if (err) throw err;
        res.write(data)
        res.end()
    });
} 
   
else if(req.url === "/create-file"){
 res.writeHead(200, {"Content-Type": "text/html"});
 fs.writeFile('temp/test.html','<h1>This is a test file</h1>', (err) => {
     if (err) throw err;
     res.write('File is created')
     res.end()
 });
} 
        else {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile('page/error.html','utf8', (err,data) => {
            if (err) throw err;
            res.write(data)
            res.end()  
        });
    } 
})
      
        
server.listen(3000);
        
        
