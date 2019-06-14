import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../actions/login.thunk';
import Header from '../../components/Header/Header';


class Login extends React.PureComponent {
    componentDidUpdate() {
        const { isLoginLoading, loginCompleted } = this.props;
        if (!isLoginLoading && loginCompleted) {
            // redirect to logi
            console.log('Ничего не делаю');
            // <Route path="/api/login" exact component={Register} />;
            // // <Redirect to='/api/login' />;
            const { history } = this.props;
            history.push('/weather');
        }
    }


    formSubmited = (values) => {
        console.log('register formSubmited', values);
        this.props.login(values);
    }

    render() {
        const { isLoginLoading } = this.props;
        return (
            <LoginForm
                isLoginLoading={isLoginLoading}
                onFormSubmited={this.formSubmited} />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoginLoading: state.login.isLoginLoading,
        loginCompleted: state.login.loginCompleted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
