/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Row from './Row';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class WeatherTable extends React.PureComponent {


    state = {
        item: 1,
    };


    renderTable() {
        const { isWeatherDataRecieved } = this.props;
        const { weatherData } = this.props;
        if (isWeatherDataRecieved === false) {
            return null;
        }

        const a = Array.from({ length: weatherData.response.data.list.length }, (v, i) => i);
        console.log();

        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Температура (℃)</th>
                        <th>Погодные условия</th>
                    </tr>
                </thead>

                <tbody>
                    {a.map(i => {
                        return <Row key={i} item={i} />
                    })}

                    {/* {weatherData.response.data.list.forEach(function (item) {
                        return <
                       
                    })} */}

                </tbody>
            </table>
        );
    }


    render() {
        return (
            <div>{this.renderTable()}</div>
        );
    }
}

const mapToStateProps = (state) => {
    return {
        isWeatherDataRecieved: state.weather.weatherCompleted,
        weatherData: state.weather.weatherData,
    };
};


export default connect(mapToStateProps)(WeatherTable);
