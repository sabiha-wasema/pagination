import "./CountryCard.css";
import { object } from "prop-types";

const CountryCard = (props) => {
  //   console.log(props.country.name);
  return (
    <div className="card">
      <div>
        <img className="card-img" src={props.country.flags.png} alt="" />
      </div>
      <div className="card-info">
        {/* <h1>{props.country.name.common}</h1> */}
        <h1>{props.country.name.common}</h1>
      </div>
    </div>
  );
};
CountryCard.propTypes = {
  country: object,
};

export default CountryCard;
