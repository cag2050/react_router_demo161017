/**
 * Created by chenanguo on 2016/10/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Left from './component/Left';
import Right from './component/Right';
import Bottom from './component/Bottom';

ReactDOM.render(<div className="container">
    <div className="header">header</div>
    <div className="middle">
        <div className="con_left"><Left /></div>
        <div className="content">content</div>
        <div className="con_right"><Right /></div>
    </div>
    <div className="bottom"><Bottom /></div>
</div>, document.getElementById("page"));
// console.log("console.log输出的内容");
// document.write("document.write输出的内容");