/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import axios from 'axios';
import { weatherData } from '../../actions/weatherdata.thunk';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


class AutocompleteInput extends React.PureComponent {
    render() {
        return (
            <Autocomplete
              style={{ width: '90%' }}
              onPlaceSelected={(city) => {
                weatherData(city.geometry.location.lat(), city.geometry.location.lng());
                }}
              types={['(regions)']}
              componentRestrictions={{ country: "ru" }}
            />
        );
    }
}


export default AutocompleteInput;
