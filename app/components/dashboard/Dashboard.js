import React from 'react';

export default class Dashboard extends React.Component {
    render() {
        return (
            <main className="app-content dashboard">
                {this.props.children}
            </main>
        );
    }
}
