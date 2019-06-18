/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { getProfile } from '../../actions/profile.thunk';

class Profile extends React.PureComponent {
    componentDidMount() {
        this.props.getProfile();
        // axiosInstance.get('/api/profile');
    }

    render() {
        if (this.props.profileCompleted === true) {
            return (
                <table className="ui celled table dataTable">
                    <thead>
                        <tr>
                            <th>Дата создания профиля</th>
                            <th>E-mail</th>
                            <th>username</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{this.props.profileData.createdAt}</td>
                            <td>{this.props.profileData.email}</td>
                            <td>{this.props.profileData.username}</td>
                        </tr>
                    </tbody>
                </table>
            );
        }

        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        isProfileLoading: state.profile.isProfileLoading,
        profileCompleted: state.profile.profileCompleted,
        profileData: state.profile.profileData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProfile }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
