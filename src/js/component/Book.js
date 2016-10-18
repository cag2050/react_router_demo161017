/**
 * Created by chenanguo on 2016/10/17.
 */
import React from 'react';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>{this.props.params.bookName}</div>
    }
}