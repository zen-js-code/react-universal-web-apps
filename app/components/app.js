import React from 'react';

import Header from './main/Header';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header root={this.props.route.path}/>
                {this.props.children}
            </div>
        );
    }
}
