import React from 'react';

export default class ContextWrapper extends React.Component {
    static get childContextTypes() {
        return {
            data: React.PropTypes.object            
        };
    }
    getChildContext() {
        return {
            data: this.props.data
        };
    }

    render() {
        return this.props.children;
    }
}
