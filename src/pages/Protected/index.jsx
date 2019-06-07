import React from 'react';

class Protected extends React.Component {
    render () {
        return (
             <p>Hello, its a main page </p>
            // <Switch>
            //     <Route path='/weather' exact component={Weather} />
            //     <Route path='/history' exact component={History} />
            //     <Route path='/profile' exact component={Profile} />
            //     <Redirect to="/weather"/>
            // </Switch>
        );
    }
}

export default Protected;