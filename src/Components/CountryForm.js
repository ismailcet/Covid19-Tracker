import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../Redux/Slices/countrySlice";
import { fetchCovidData } from "../Redux/Slices/covidSlice";

const CountryForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
    dispatch(fetchCovidData("Afghanistan"));
  }, [dispatch]);
  const items = useSelector((state) => state.country.countries);
  const isLoading = useSelector((state) => state.country.isLoading);

  return (
    <div className="countryForm">
      <select
        name="Country"
        id="Countries"
        className="countries-selectBox"
        onChange={(e) => dispatch(fetchCovidData(e.target.value))}
      >
        <option value={"default"} disabled>
          Choose an option
        </option>
        {isLoading === true ? (
          <option>Loading....</option>
        ) : (
          items.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default CountryForm;
