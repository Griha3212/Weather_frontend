/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherData } from '../../actions/weatherdata.thunk';


class AutocompleteInput extends React.PureComponent {
  render() {
    return (
      <div style={{ width: '100%' }} className="ui input">
        <Autocomplete
          style={{ width: '100%' }}
          onPlaceSelected={(city) => {
            this.props.weatherData(city.geometry.location.lat(), city.geometry.location.lng());
          }}
          types={['(regions)']}
          componentRestrictions={{ country: 'ru' }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isWeatherLoading: state.weather.isWeatherLoading,
    weatherCompleted: state.weather.weatherCompleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ weatherData }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteInput);
