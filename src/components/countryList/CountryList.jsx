import { array } from "prop-types";
import CountryCard from "../CountryCard";
import './countryList.css'
const CountryList = ({ countryData }) => {
  console.log(countryData);
  return (
    <div>
      <h1>Country List</h1>
      {/* {
        countryData.map(country=>console.log(country.ccn3))
      } */}

     <div className="country-list">
     {countryData.map((country) => {
        return <CountryCard 
        key={country.ccn3}
        country={country} />;
      })} 
     </div>
    </div>
  );
};

CountryList.propTypes = {
  countryData: array,
};

export default CountryList;
