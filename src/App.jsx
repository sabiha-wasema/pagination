import { useState, useEffect } from "react";
import CountryList from "./components/countryList/CountryList";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = countryData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="display-country">
      <h1>{countryData.length}</h1>
      <CountryList countryData={currentPosts}></CountryList>
      <Pagination totalPosts={countryData.length}
       postsPerPage={postsPerPage}
       setCurrentPage ={setCurrentPage}
        />
    </div>
  );
}

export default App;
