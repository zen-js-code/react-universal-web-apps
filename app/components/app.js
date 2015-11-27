import React from 'react';

import Header from './main/Header';

export default class App extends React.Component {
    static get childContextTypes() {
        return {
            root: React.PropTypes.string            
        };
    }
    
    getChildContext() {
        return {
            root: this.props.route.path
        };
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}
