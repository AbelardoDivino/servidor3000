const http = require("http");

const alunos = [
  { id: 1, nome: "ana", idade: 15 },
  { id: 2, nome: "carlito", idade: 16 },
  { id: 2, nome: "carlito", idade: 16 },
  { id: 2, nome: "carlito", idade: 16 },
  { id: 2, nome: "carlito", idade: 16 },
  { id: 2, nome: "carlito", idade: 16 },
  { id: 2, nome: "carlito", idade: 16 },
  { id: 2, nome: "carlito", idade: 16 },
  { id: 2, nome: "carlito", idade: 16 }
];

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/alunos") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(alunos));
  } 
  else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });
    res.end("Rota não encontrada");
  }

});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
