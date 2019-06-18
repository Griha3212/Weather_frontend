import React from 'react';
// import { getHistoryItem } from '../../../../actions/history.thunk';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHistoryItem } from '../../../../actions/history.thunk';
import HistorySingleItemRow from './HistorySingleItemRow';
import '../../../../style.css';

class HistoryItem extends React.PureComponent {
    componentDidMount() {
        this.props.getHistoryItem(this.props.match.params._id);
    }


    renderHistoryItem() {
        const { historyItemLoadingCompleted, historyItemData } = this.props;
        if (historyItemLoadingCompleted === false) {
            return null;
        }

        return (
            <table className="ui celled table dataTable">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Температура (℃)</th>
                        <th>Погодные условия</th>
                    </tr>
                </thead>

                <tbody>
                { historyItemData.response.data.weatherData.map((item) => {
                        return <HistorySingleItemRow key={item.dt} item={item} />;
                    })}
                </tbody>
            </table>
        );
    }


    render() {
        return (
            <div>{this.renderHistoryItem()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isHistoryItemLoading: state.history.isHistoryItemLoading,
        historyItemLoadingCompleted: state.history.historyItemLoadingCompleted,
        historyItemData: state.history.historyItemData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getHistoryItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryItem);
