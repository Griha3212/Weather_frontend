/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import HistoryRow from './HistoryRow';
import '../../style.css';
// eslint-disable-next-line react/prefer-stateless-function

class HistoryTable extends React.PureComponent {
    renderTable() {
        const { historyLoadingCompleted, historyData } = this.props;
        if (historyLoadingCompleted === false) {
            return null;
        }

        // const a = Array.from({ length: historyData.response.data.length }, (v, i) => i);
        // console.log();

        return (
            <table className="ui celled table dataTable">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Дата запроса</th>
                        {/* <th>Погодные условия</th> */}
                    </tr>
                </thead>

                <tbody>
                    { historyData.response.data.map((item) => {
                        return <HistoryRow key={item._id} item={item} />;
                    })}
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

const mapStateToProps = (state) => {
    return {
        isHistoryLoading: state.history.isHistoryLoading,
        historyLoadingCompleted: state.history.historyLoadingCompleted,
        historyData: state.history.historyData,
    };
};


export default connect(mapStateToProps)(HistoryTable);
