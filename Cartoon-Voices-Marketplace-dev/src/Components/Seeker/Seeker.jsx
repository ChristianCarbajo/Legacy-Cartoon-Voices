import React, { useState, useEffect } from 'react';



function Seeker(props) {

  const [searchTerm, setSearchTerm] = useState('');
  const url = "http://localhost:8080/voices"

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.info("paso por aquí")
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.info("paso por aquí")
    props.handleSearch(searchTerm); 
   
  }

  return (
    <form onSubmit={handleFormSubmit} className="d-flex">
      <input className="form-control me-2" type="text" name="seeker" onChange={handleInputChange} value={searchTerm} placeholder="Busca tu personaje" />
      <button className="btn btn-outline-dark" type="submit">
        Buscar
      </button>
    </form>
  );
}


export default Seeker;

