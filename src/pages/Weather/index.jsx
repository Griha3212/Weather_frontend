import React from 'react';
import AutocompleteInput from '../../components/Autocompleteinput/AutocompleteInput';
import WeatherTable from '../../components/WeatherTable/WeatherTable';


class Weather extends React.PureComponent {
    render() {
        return (
            <>

                <AutocompleteInput />
                <WeatherTable />
            </>
        );
    }
}


export default Weather;
