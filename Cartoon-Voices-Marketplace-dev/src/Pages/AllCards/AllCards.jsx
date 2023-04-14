import React from 'react'
import Header from '../../Components/Header/Header'
import CardsGroup from '../../Components/CardsGroup/CardsGroup'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react';
import { useEffect } from 'react';
import CallAxios from "../../Services/CallAxios";



export default function AllCards() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
      CallAxios().getVoices()
      .then((data) => {
        console.log(data); 
        setData(data);
      })
      .catch((error) => console.error(error));
       
  }, []);

  const handleSearch = (searchTerm) => {
    console.info(data)
    const results = data.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const priceMatch = item.price.toString().toLowerCase().includes(searchTerm.toLowerCase());
      const categoriesMatch = item.category.toLowerCase().includes(searchTerm.toLowerCase());
      console.info(categoriesMatch)
      return categoriesMatch || nameMatch || priceMatch;
    }); 
    setFilteredData(results);
  }
  
  return (
    <>
        <Header handleSearch = {handleSearch}/>
        <CardsGroup filteredData = {filteredData}/>
        <Footer />
    </>
  )
}
