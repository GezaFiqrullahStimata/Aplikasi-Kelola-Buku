import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_js_crud",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "SELECT * FROM books WHERE id = ?";
  db.query(q, [bookId],(err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`, `status`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
    req.body.status,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ?, `status`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
    req.body.status
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const values = [
    req.body.email,
    req.body.password,
  ];
  const sql = "SELECT * FROM user WHERE `email`= ? AND `password`= ?";
  db.query(sql, values, (err, result) => {
    if (err) res.json({ message: "Login Error" });
    return res.json(result);
  });
});

app.post('/register',(req,res)=>{
  const sql = "INSERT INTO user (`nama`,`email`,`password`) VALUES (?, ?, ?)";
  const values = [
    req.body.nama,
    req.body.email,
    req.body.password
  ]
  db.query(sql, values, (err,result)=>{
    if(err) return res.json({message:'Register error' + err})
    return res.json({success:"Registrasi berhasil"})
  })
})

app.listen(8800, () => {
  console.log("Connected to backend.");
});