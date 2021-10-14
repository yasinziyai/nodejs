const http = require("http");
const qs = require("querystring");
const fs = require("fs");

const server = http.createServer((request, respones) => {
  if (request.url === "/" && request.method === "GET") {
    respones.setHeader("content.type", "text/html");
    respones.write(`
    <html>
      <head>
         <title>yasin</title>
      </head>
      <body>
       <h1>welcomme to the site</h1>
       <form action="" metod="POST">
          <lable  for = "serach">search</lable>
          <input name="search" id="srarch"/>
          <button>send data</button>
       </form>
      </body>
    </html>
    `);
    return respones.end();
  } else if (request.url === "/" && request.method === "POST") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let data = qs.parse(body);
      fs.appendFileSync("db.txt", "/n" + data.search, () => {
        respones.setHeader(302, { location: "/" });
        respones.end();
      });
    });
  } else if (request.url === "/my-product") {
    let mydata = { name: "yasin", family: "ziyai" };
    respones.setHeader("content-type", "application/JSON ");
    respones.write(JSON.stringify(mydata));
    return respones.end;
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server runner on localhost:3000...");
});
