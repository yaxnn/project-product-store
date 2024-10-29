import React, { useEffect, useState } from "react";
import BookCard from "../book/BookCard";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("choose a genre");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) =>setBooks(data));
  }, []);

  const filterBooks = selectedCategory === "Choose a genre" ? books: books.filter(book => book.category === selectedCategory.toLowerCase())
  console.log(filterBooks)
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Seller</h2>
      {/* {category filtering} */}
      <div className="mb-8 flex items-center">
        <select 
        onChange={(e) => setselectedCategory(e.target.value)}
        name="category" id="category" className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {
            filterBooks.map((book, index) => (
                    <BookCard key={index} book={book}/>
            ))
      }
    </div>
  );
};

export default TopSellers;
