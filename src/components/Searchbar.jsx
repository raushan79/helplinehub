import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [helplineNumber, setHelplineNumber] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/helplineNumbers/${searchTerm}`);
      setHelplineNumber(response.data.helplineNumber);
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
      setHelplineNumber(null);
    }
  };

  return (
    <div className="my-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 border rounded w-64"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 p-2 rounded ml-2 text-white">Search</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {helplineNumber && (
        <div className="my-4 p-4 bg-gray-200 rounded">
          <p>Helpline Number: {helplineNumber.helplineNumber}</p>
          <p>Name: {helplineNumber.name}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
