/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';

class Row extends React.PureComponent {
    renderRow() {
        const { isWeatherDataRecieved } = this.props;
        const { weatherData } = this.props;
        if (isWeatherDataRecieved === false) {
            return null;
        }

        return (

            <tr>
                {/* <td>{this.props.item.dt_txt}</td>
                <td>{(this.props.item.main.temp - 273.15).toFixed(2)}</td>
                <td>{this.props.item.weather[0].main}</td> */}

                <td>{weatherData.response.data.list[this.props.item].dt_txt}</td>
                <td>{(weatherData.response.data.list[this.props.item].main.temp - 273.15).toFixed(2)}</td>
                <td>{weatherData.response.data.list[this.props.item].weather[0].main}</td>
            </tr>
            // <div>{weatherData.response.data.list[0].dt_txt} <br />
            //     {(weatherData.response.data.list[0].main.temp-273.15).toFixed(2)} <br />
            //     {weatherData.response.data.list[0].dt_txt}
            // </div>
        );
    }

    render() {
        return (

            this.renderRow()

        );
    }
}


const mapStateToProps = (state) => {
    return {
        isWeatherDataRecieved: state.weather.weatherCompleted,
        weatherData: state.weather.weatherData,
    };
};

export default connect(mapStateToProps)(Row);
