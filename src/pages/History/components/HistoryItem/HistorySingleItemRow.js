// /* eslint-disable no-shadow */
// /* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router';

class HistorySingleItemRow extends React.PureComponent {

    render() {
        const { item } = this.props;
        return (
            <tr>
                <td>{item.dt_txt}</td>
                <td>{(item.main.temp - 273.15).toFixed(2)}</td>
                <td>{item.weather[0].main}</td>
            </tr>
        )
    }
}


export default withRouter(HistorySingleItemRow);
