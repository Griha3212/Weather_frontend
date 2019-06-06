import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import Auth from './Auth';

class Login extends React.Component {

    renderError({ error, touched, }) {
        if (touched && error) {
            return (

                <div className="ui error message">


                    <div className="header">

                        {error}

                    </div>
                </div>


            );
        }
    }



    renderInput = ({ input, label, meta }) => {
        console.log(meta);
        return (

            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }





    ///Отправка при успешном заполнении формы
    onSubmit = async (formValues) => {

        console.log(formValues);

        try {
            axios.post('http://localhost:3000/api/login',
                formValues
            ).then(function (response) {
                console.log("Это ответ", response);

                if (response.data === "login successful") {

                    console.log("Всё отлично");


                }

                //Perform action based on response
            })
        }


        //    catch(response) {
        //         console.log(response);
        //     }
        catch (error) {
            console.log(error);
        };

    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/* <Field name="username" component={this.renderInput} label="Enter Username" /> */}
                <Field name="email" component={this.renderInput} label="Enter e-mail" />
                <Field name="password" component={this.renderInput} label="Enter Password" />
                <button className="ui button primary">Submit</button>
                
                {/* <Auth /> */}
            </form>
        );
    }

}

const validate = (formValues) => {

    const errors = {};
    // if (!formValues.username) {

    //     errors.username = 'Enter the username please';

    // }

    if (!formValues.email) {

        errors.email = 'Enter the email please';

    }

    if (!formValues.password) {

        errors.password = 'Enter the password please';

    }
    return errors;

};


export default reduxForm(
    {
        form: 'login',
        validate
    }

)(Login);


