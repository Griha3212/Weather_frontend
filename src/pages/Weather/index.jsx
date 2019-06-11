import React from 'react';
import AutocompleteInput from '../../components/Autocompleteinput/AutocompleteInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { weatherData } from '../../actions/weatherdata.thunk';


class Weather extends React.PureComponent {
    render() {
        return (
            <>

                <AutocompleteInput />
                {this.props.weatherData}
            </>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
