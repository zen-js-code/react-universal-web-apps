import React from 'react';
import {IndexLink} from 'react-router';

export default class Header extends React.Component {
    static get contextTypes() {
        return {
            root: React.PropTypes.string            
        };
    }

    render() {
        return (
            <header className="app-header">
                <h1 className="title">
                    <IndexLink to={this.context.root}>App</IndexLink>
                </h1>
            </header>
        );
    }
}
