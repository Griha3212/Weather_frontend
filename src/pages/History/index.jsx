import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHistoryList } from '../../actions/history.thunk';
import HistoryTable from '../../components/HistoryTable/HistoryTable';
// import axios from 'axios';
// import axiosInstance from '../../core/axios';
// import AutocompleteInput from '../../components/Autocompleteinput/AutocompleteInput';
// import WeatherTable from '../../components/WeatherTable/WeatherTable';


class History extends React.PureComponent {

    componentDidMount() {
        this.props.getHistoryList();
        // this.props.getHistoryList - from thunk
    }

    render() {
        console.log('this.props.h', this.props)
        return (
            <>
                {/* MAP histories/ return <HistoryItem></HistoryItem> */}
                <div><HistoryTable/></div>
            </>
        );
    }
}


 // add redux


const mapStateToProps = (state) => {
    return {
        isHistoryLoading: state.history.isHistoryLoading,
        historyLoadingCompleted: state.history.historyLoadingCompleted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getHistoryList }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(History);
