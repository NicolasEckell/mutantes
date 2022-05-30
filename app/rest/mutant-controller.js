const { isMutant } = require("../services/mutant-service.js");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
});
// const server2 = http.createServer(async (req, res) => {
//     if (req.url === "/mutant" && req.method === "POST") {

//         request.on('data', function (data) {
//             body += data;

//             // Too much POST data, kill the connection!
//             // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
//             if (body.length > 1e6)
//                 request.connection.destroy();
//         });

//         request.on('end', function () {
//             var post = qs.parse(body);
//             // use post['blah'], etc.
//         });

//         const response = isMutant(data);
//         // res.write(response);
//         res.write(data);
//         if(response){
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write("OK");
//             res.end();
//         }
//         else{
//             res.writeHead(403, { "Content-Type": "application/json" });
//             // res.write("Forbidden");
//             res.end();
//         }
//     }
//     else if (req.url === "/health" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write("OK");
//         res.end();
//     }
//     else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Not found" }));
//     }
// });
