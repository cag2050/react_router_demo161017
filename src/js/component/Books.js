/**
 * Created by chenanguo on 2016/10/17.
 */
import React from 'react';
import {Link} from 'react-router';

export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <ul>
                <li><Link to="/Books/People/es6_lesson" activeClassName="active">es6_lesson</Link></li>
                <li><Link to="/Books/People/react_lesson" activeClassName="active">react_lesson</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
}