import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { register } from '../../actions/register.thunk';
import Header from '../../components/Header/Header';


class Register extends React.PureComponent {
    componentDidUpdate() {
        const { isRegistrationLoading, registerCompleted } = this.props;
        if (!isRegistrationLoading && registerCompleted) {
            // redirect to logi
            console.log('Запускаю редирект');
            // <Route path="/api/login" exact component={Register} />;
            // // <Redirect to='/api/login' />;
            const { history } = this.props;
            history.push('login');
        }
    }


    formSubmited = (values) => {
        console.log('register formSubmited', values);
        this.props.register(values);
    }

    render() {
        const { isRegistrationLoading } = this.props;
        return (
            <>
                <Header />
                <RegisterForm
                    isRegistrationLoading={isRegistrationLoading}
                    onFormSubmited={this.formSubmited} />
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isRegistrationLoading: state.register.isRegistrationLoading,
        registerCompleted: state.register.registerCompleted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ register }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);
