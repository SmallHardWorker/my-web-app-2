import React, {Component} from 'react';
import './App.css';
import './Login.css'
import $ from 'jquery';

export class LoginOrLogout extends Component {
    constructor(props) {
        super(props);
        this.state = {logined: false, fa: 5};
    }

    handleClick() {
        this.setState({logined: !this.state.logined});
        this.props.callbackParent();
    }

    render() {
        var text = this.state.logined ? "退出" : "登录";
        return (
            <div className="login" onClick={this.handleClick.bind(this)}>{text}</div>
        );
    }
}

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    display() {
        //document.getElementById("myModal").style.display = "block";
    }

    handleX() {
        this.props.callbackParent();
        //document.getElementById("loginBlock").style.display = "none";
    }
    render() {
        //var text = this.props.display ? "login-block" : "login-none";可用className={text}
        var styleObj = {
            display: "block",
            position: "fixed",
            zIndex: 1,
            left: "35%",
            top: "30%",
            width: "30%",
            height: "40%",
            overflow: "auto",
            //"background-color": "rgb(0,0,0)",
            backgroundColor: "rgba(0,0,0,0.4)"
        }
        styleObj.display = this.props.display ? "block" : "none";
        return (
            <div id="loginBlock" style={styleObj}>
                <span className="close" onClick={this.handleX.bind(this)}>&times;</span>
                <p>弹窗中的文本...</p>
                <LoginButton />
            </div>
        );
    }

}

export class LoginButton extends Component {
    handleClick() {

    }
    render() {
        return (
            <div className="login-input">
                <label>账号</label>
                <input id="username"  name="username" type="text" />
                <br />
                <label>密码</label>
                <input id="password" name="password" type="password" />
                <br />
                <input type="submit" value="登录" />
            </div>
        );
    }
}

export class Register extends Component {
    render() {
        return (
            <div>aaa</div>
        );
    }
}

//export default LoginOrLogout;