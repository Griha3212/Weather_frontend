/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import { login } from '../../actions/login.thunk';
import Header from '../../components/Header/Header';


class Login extends React.PureComponent {
    state = { modalOpen: false };

    componentDidUpdate() {
        const { isLoginLoading, loginCompleted } = this.props;
        if (!isLoginLoading && loginCompleted) {
            // redirect to logi
            console.log('Ничего не делаю');
            // <Route path="/api/login" exact component={Register} />;
            // // <Redirect to='/api/login' />;
            const { history } = this.props;
            history.push('/weather');
        } else {
            this.state.modalOpen = true;
        }
    }

    handleClose = () => this.setState({ modalOpen: false })


    formSubmited = (values) => {
        console.log('register formSubmited', values);
        this.props.login(values);
    }

    render() {
        const { isLoginLoading } = this.props;
        return (
            <>
                <Header />
                <LoginForm
                    isLoginLoading={isLoginLoading}
                    onFormSubmited={this.formSubmited}
                />
                <Modal open={this.state.modalOpen} basic size='small'>

                    <Modal.Content>

                    </Modal.Content>
                    <Modal.Actions>
                        <p>Email or password is wrong!</p>
                        <Button onClick={this.handleClose} color='green' inverted>
                            <Icon name='checkmark' />Ok
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>
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
