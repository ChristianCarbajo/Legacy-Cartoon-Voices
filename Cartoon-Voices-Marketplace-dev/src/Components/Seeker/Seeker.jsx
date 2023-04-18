import React, { useState, useEffect } from 'react';
import CallAxios from '../../Services/CallAxios';

function Seeker(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    CallAxios()
      .getVoices()
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const results = data.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const priceMatch = item.price.toLowerCase().includes(searchTerm.toLowerCase());
      const categoriesMatch = item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const mailMatch = item.email.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch || priceMatch || categoriesMatch || mailMatch;
    });
    setFilteredData(results);
  }, [searchTerm, data]);

  const itemsToRender = filteredData.length > 0 ? filteredData : data;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  function handleSearch(searchTerm) {
    const results = data.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const priceMatch = item.price.toLowerCase().includes(searchTerm.toLowerCase());
      const categoriesMatch = item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const mailMatch = item.email.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || priceMatch || categoriesMatch || mailMatch;
    });
    setFilteredData(results);
  }

  return (
    <form onSubmit={handleFormSubmit} className="d-flex" role="search">
      <input className="form-control me-2" type="text" name="seeker" onChange={handleInputChange} value={searchTerm} placeholder="Busca tu personaje" />
      <button className="btn btn-outline-dark" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default Seeker;
