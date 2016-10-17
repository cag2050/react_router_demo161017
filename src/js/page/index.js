/**
 * Created by chenanguo on 2016/10/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Left from '../component/Left';
import Right from '../component/Right';
import Bottom from '../component/Bottom';
import Nav from '../component/Nav';
import Books from '../component/Books';

ReactDOM.render(<div className="container">
    <div className="header" id="nav"></div>
    <div className="middle">
        <div className="con_left"><Left /></div>
        <div className="content">11111</div>
        <div className="con_right"><Right /></div>
    </div>
    <div className="bottom"><Bottom /></div>
</div>, document.getElementById("page"));

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Nav}>

        <Route path="/Books" component={Books}>Books</Route>
    </Route>
</Router>, document.getElementById("nav"));


// console.log("console.log输出的内容");
// document.write("document.write输出的内容");