import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { PieChart, Pie, Cell } from 'recharts';
import './books.css';

const data = [
  { name: 'Fiction', value: 400 },
  { name: 'Non-Fiction', value: 300 },
  { name: 'Science', value: 300 },
  { name: 'History', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BooksComponent = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book One', description: 'Description for book one' },
    { id: 2, title: 'Book Two', description: 'Description for book two' },
  ]);

  const handleAddBook = () => {
    const newBook = { id: books.length + 1, title: 'New Book', description: 'Description for new book' };
    setBooks([...books, newBook]);
  };

  const handleEditBook = (id) => {
    const updatedBooks = books.map(book => book.id === id ? { ...book, title: `${book.title} (Edited)` } : book);
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="books-component">
      <h1>Book Collection</h1>
      <button onClick={handleAddBook} className="add-button">
        <FontAwesomeIcon icon={faPlus} /> Add Book
      </button>
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <div className="book-actions">
              <button onClick={() => handleEditBook(book.id)}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button onClick={() => handleDeleteBook(book.id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2>Book Categories</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default BooksComponent;
