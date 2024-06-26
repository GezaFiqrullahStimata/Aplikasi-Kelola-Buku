import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
    status:""
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8800/books/${bookId}`)
      .then((res) => {
        setBook(res.data[0]);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [bookId]);

  return (
    <div className="form">
      <h1>Edit Buku</h1>
      <input
        type="text"
        value={book.title}
        placeholder="Judul Buku"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Deskripsi Buku"
        name="desc"
        value={book.desc}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Harga Buku"
        name="price"
        value={book.price}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Cover Buku"
        name="cover"
        value={book.cover}
        onChange={handleChange}
      />
            <label>
        Status Buku:
        <select name="status" value={book.status} onChange={handleChange}> 
          <option value="true">Aktif</option>
          <option value="false">Non-Aktif</option>
        </select>
      </label>
      <button onClick={handleClick}>Edit</button>
      {error && "Something went wrong!"}
      <Link to="/home">Lihat Semua Buku</Link>
    </div>
  );
};

export default Update;