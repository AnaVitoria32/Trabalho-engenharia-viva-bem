const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "teste@teste.com" && password === "123") {
    return res.json({ token: "token-fake" });
  }

  return res.status(401).json({ message: "erro login" });
});

app.listen(3000, () => {
  console.log("backend rodando em http://localhost:3000");
  
  app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando " });
});
});