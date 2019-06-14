import React from 'react';
import axios from 'axios';
import axiosInstance from '../../core/axios';
// import AutocompleteInput from '../../components/Autocompleteinput/AutocompleteInput';
// import WeatherTable from '../../components/WeatherTable/WeatherTable';


class History extends React.PureComponent {

    componentDidMount() {

        axiosInstance.get('/api/history')
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        return (
            <>

                <div>History page</div>
            </>
        );
    }
}


export default History;
