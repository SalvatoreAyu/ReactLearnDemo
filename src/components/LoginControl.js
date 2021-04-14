import React from 'react'
const { Fragment } = require('react')
function LoginButton(props) {
    return <button onClick={props.onClick}>login</button>
}
function LogOutButton(props) {
    return <button onClick={props.onClick}>logOut</button>
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
        }
    }
    render() {
        const button = !this.state.isLogin ? <LoginButton onClick={this.handleLogin.bind(this)}></LoginButton> : <LogOutButton onClick={this.handleLogin.bind(this)}></LogOutButton>
        return (
            <Fragment>
                <p>the user is {this.state.isLogin ? 'currently' : 'not'} login in</p>
                {button}
            </Fragment>
        )
    }
    handleLogin() {
        this.setState({
            isLogin: !this.state.isLogin,
        })
    }
}
export default LoginControl
