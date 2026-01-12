import { useState } from "react";
import Card from "./card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((res) => {
          setBooks(res.data.items);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>A room without books is like<br />a body without a soul</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <img src="/image/bg5.webp" alt="background" />
        </div>
      </div>

      <div className="container">
  {books.length > 0 &&
    books.map((book) => (
      <Card
        key={book.id}
        image={
          book.volumeInfo.imageLinks?.thumbnail ||
          book.volumeInfo.imageLinks?.smallThumbnail ||
           "/image/default.png"
            }

        title={book.volumeInfo.title}
        price={
          book.saleInfo.listPrice
            ? book.saleInfo.listPrice.amount
            : "N/A"
        }
        link={book.volumeInfo.previewLink}
      />
    ))}
</div>
    </>
  );
};

export default Main;
