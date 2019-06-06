import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'

import { register } from '../actions/auth.thunk';

class Register extends React.PureComponent {
    componentDidUpdate() {
        if(!isRegistrationLoading && registerCompleted) {
            // redirect to login
        }
    }
    formSubmited = (values) => {
        console.log('values', values)
        const { register } = this.props;
        register(values);
    }
    render () {
        const { isRegistrationLoading } = this.props;
        return (
            <RegisterForm isRegistrationLoading={isRegistrationLoading} onFormSubmited={this.formSubmited} />
        )
    }
}

    
const mapStateToProps = (state) => {
    return { 
        isRegistrationLoading: state.auth.isRegistrationLoading,
        registerCompleted: state.auth.registerCompleted
    };


};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ register: register }, dispatch)

};


export default connect(mapStateToProps, mapDispatchToProps)(Register);