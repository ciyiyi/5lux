import React, { Component,Fragment } from 'react';

export class Layout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}


