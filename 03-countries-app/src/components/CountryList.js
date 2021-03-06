import React from 'react';
import Country from './Country';
import PropTypes from 'prop-types';

const CountryList = ({ countries, selectCountry, total }) => {
  //console.log('CountryList: countries', countries);

  const renderedCountries = countries.map((country) => (
    <Country country={country} key={country.code} selectCountry={selectCountry} />
  ));
  //console.log('CountryList: renderedCountries', renderedCountries);

  return (
    <div className="ui raised very padded text container segment">
      <h2 className="ui header">Country List</h2>
      <p>
        Here is a selection of <span className="color">{total}</span> countries.
        Select some as your next holiday destination and let your best friend know
        about it!
      </p>
      <div className="ui list">{renderedCountries}</div>
    </div>
  );
};

CountryList.propTypes = {
  countries: PropTypes.array.isRequired,
  selectCountry: PropTypes.func.isRequired,
};

export default CountryList;
