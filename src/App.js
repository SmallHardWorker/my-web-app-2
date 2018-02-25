import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Content.css';
import * as login from './Login';
import * as content from './Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {logining: false, fa: 5};
        this.host = "http://localhost:80";
    }

    handleLogin() {
        this.setState({logining: !this.state.logining});
    }

    render() {
        return (
            <div className="App">
                <login.Login display={this.state.logining} url={this.host+"/app/user/login"}
                             callbackParent={this.handleLogin.bind(this)} />
                <div className="App-header">
                    <login.LoginOrLogout name="dfadwf" callbackParent={this.handleLogin.bind(this)} />
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to MyApp</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.fd
                </p>
                <content.List url={this.host+"/app/article/all"} />
                <content.Upload url="http://localhost:8080/app/test/file"/>
            </div>
        );
        //document.getElementById('login')
    }
}

export default App;
