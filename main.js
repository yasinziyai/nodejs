const { Console } = require("console");
const http = require("http");

const server = http.createServer((request, respones) => {
  respones.write("yasin");
  respones.end();
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server runner on localhost:3000...");
});
