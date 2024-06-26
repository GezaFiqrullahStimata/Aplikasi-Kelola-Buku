import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
    status:"true"
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Tambah Buku Baru</h1>
      <input
        type="text"
        placeholder="Judul Buku"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Deskripsi Buku"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Harga Buku"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Cover Buku"
        name="cover"
        onChange={handleChange}
      />
      <label>
        Status Buku:
        <select name="status" defaultValue={"true"} onChange={handleChange}> 
          <option value="true">Aktif</option>
          <option value="false">Non-Aktif</option>
        </select>
      </label>
      <button onClick={handleClick}>Tambah</button>
      {error && "Something went wrong!"}
      <Link to="/home">Lihat Semua Buku</Link>
    </div>
  );
};

export default Add;