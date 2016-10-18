/**
 * Created by chenanguo on 2016/10/17.
 */
import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>
            <ul role="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Books">Books</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    }
}