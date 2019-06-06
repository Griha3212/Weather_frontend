import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class Auth extends React.Component {

    componentDidMount() {

        // this.auth.isSignedIn.listen(this.onAuthChange);
    //  this.auth.isSignedIn == null;
    //   this.props.isSignedIn = null;
    
    this.onAuthChange(this.auth.isSignedIn.post());
    this.auth.isSignedIn.listen(this.onAuthChange);

    }


    // componentDidMount() {

    //     window.gapi.load('client:auth2', () => {
    //         window.gapi.client.init({
    //             clientId: '559953868300-m4eprs0nfmog71qkt9tiqcc6b0gmaiep.apps.googleusercontent.com',
    //             scope: 'email'
    //         }).then(() => {

    //             this.auth = window.gapi.auth2.getAuthInstance();

    //             this.onAuthChange(this.auth.isSignedIn.get());

    //             this.auth.isSignedIn.listen(this.onAuthChange);
    //         });
    //     });
    // }


    // onAuthChange = (isSignedIn) => {

    //     if (isSignedIn) {

    //         this.props.signIn(this.auth.currentUser.get().getId());
    //     } else {

    //         this.props.signOut();

    //     }

    // }






    onSignIn = () => {

        this.auth.signIn();

    };

    onSignOut = () => {

        this.auth.signOut();

    };


    renderAuthButton() {

        if (this.props.isSignedIn === null) {

            return null;


        } else if (this.props.isSignedIn) {

            return (
                <button onClick={this.onSignOut} className="ui red button">
                    <i className="google icon" />
                    Sign Out
                </button>

            )


        } else {

            return (

                <button onClick={this.onSignIn} className="ui blue button">
                    <i className="angle right icon" />
                    Sign In
            </button>


            )




        }

    }

    render() {

        return <div>{this.auth.renderAuthButton()}</div>;

    }


}

const mapToStateProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };


};


export default connect(mapToStateProps, { signIn, signOut })(Auth);