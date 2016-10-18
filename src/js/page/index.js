/**
 * Created by chenanguo on 2016/10/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from '../component/Home';
import Books from '../component/Books';
import About from '../component/About';
import Nav from '../component/Nav';
import Left from '../component/Left';
import Right from '../component/Right';
import Bottom from '../component/Bottom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="container">
            <div className="header"><Nav /></div>
            <div className="middle">
                <div className="con_left"><Left /></div>
                <div className="content">{this.props.children}</div>
                <div className="con_right"><Right /></div>
            </div>
            <div className="bottom"><Bottom /></div>
        </div>
    }
}

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/Books" component={Books}/>
        <Route path="/About" component={About}/>
    </Route>
</Router>, document.getElementById("page"));


// console.log("console.log输出的内容");
// document.write("document.write输出的内容");