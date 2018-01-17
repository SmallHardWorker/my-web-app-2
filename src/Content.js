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
            type: "get",
            dataType: "JSONP",
            async: "true",
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