import React, {Component} from 'react';
import './Content.css';
import './Login.css'
import $ from 'jquery';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {content: "aaa", fa: 5};
    }

    componentDidMount() {
        var url = this.props.url;
        this.serverRequesst = $.ajax({
            url: url,
            type: "get",//跨域永远是get
            dataType: "JSONP",
            //async: "false",
            jsonp: "callback",
            //jsonpCallback: "callback",
            success: function(msg) {
                //alert("lalala");
                this.setState({content: msg.content});
                this.lalala = msg.content;
                //var response = result;
                //this.state.content = result;
        }.bind(this)});
    }

    componentWillUnmount() {
        this.serverRequesst.abort();
    }

    render() {
        //var text = this.state.content;
        //var text = this.text;
        return (
            <div className="list" >{this.state.content}</div>
        );
    }
}

export class Upload extends Component {
    handleClick() {
        var formData = new FormData();
        formData.append("upload", document.getElementsByName("file1")[0].files[0]);
        var url = this.props.url;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    alert(formData.get("upload"));
                }
                else {
                    alert();
                }
            }
        };
        xhr.open("POST", url);
        //xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
        //xhr.setRequestHeader("Content-Type","multipart/form-data");
        xhr.send(formData);
    }
    render() {
        return (
            <div className="upload">
                <input name= "file1" type="file"></input>
                <input name= "file2" type="file"></input>
                <input name= "file3" type="file"></input>
                <div onClick={this.handleClick.bind(this)}>upload</div>
            </div>
        );
    }
}