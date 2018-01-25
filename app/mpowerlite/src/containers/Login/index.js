import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormGroup, Label, Input, Card, CardTitle, CardText, Button } from 'reactstrap';

import { tryLogin, tryLogout } from '../../actions';

export const LoginForm = ({tryLogin, auth}) => (<div>
    
    <form className='px-3 py-2' onSubmit={e => {
        e.preventDefault();
        tryLogin(e);
    }} >
        <p style={{color: 'red'}}>{auth.errors}</p>
        <FormGroup >
            <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup >
            <Input type="password" name="password" id="password" placeholder="password" />
        </FormGroup>
        <Button block color='primary' type='submit'>Login</Button> 
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">New around here? Sign up</a>
        <a class="dropdown-item" href="#">Forgot password?</a>
    </form>
</div>
)

export const Login = ({tryLogin, logout, auth}) => {
    console.log(tryLogout);
    if(auth.isLoggedIn) {
        return (<div>
            <h2>Hi {auth.userData.username}!</h2>
            <Button onClick={logout}>Logout</Button>
        </div>  
        );
    } else {
        return <LoginForm tryLogin={tryLogin} auth={auth} />
    }

}
    

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    tryLogin: (env) => {
        const username = env.target.querySelector("input#email").value;
        const password = env.target.querySelector("input#password").value;

        console.log(username)
        console.log(password)

        dispatch(tryLogin({username, password}))
    },
    logout: () => dispatch(tryLogout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login)