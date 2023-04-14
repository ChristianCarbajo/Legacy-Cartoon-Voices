import React from 'react'
import Header from '../../Components/Header/Header'
import CardsGroup from '../../Components/CardsGroup/CardsGroup'
import Footer from '../../Components/Footer/Footer'


export default function AllCards() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    ApiGetService(url)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

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
    <>
        <Header handleSearch= {handleSearch}/>
        <CardsGroup filteredData= {filteredData}/>
        <Footer />
    </>
  )
}
