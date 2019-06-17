// /* eslint-disable no-shadow */
// /* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router';

class HistoryRow extends React.PureComponent {
    itemClicked = () => {
        const { item, history } = this.props;
        console.log('this.props', this.props)
        history.push(`/history/${item._id}`)
    }
    render() {
        const { item } = this.props;
        return (
            <tr id={item._id} onClick={this.itemClicked}>
                <td>{item.city}</td>
                <td>{item.creationDate}</td>
            </tr>
        )
    }
}


export default withRouter(HistoryRow);