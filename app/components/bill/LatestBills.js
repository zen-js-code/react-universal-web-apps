import React from 'react';
import axios from 'axios';

import List from '../common/List';
import CompactBill from './CompactBill';

export default class LatestBills extends React.Component {
    static get NAME() {
        return 'LatestBills';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object            
        };
    }

    static requestData(params, domain = '') {
        return axios.get(`${domain}/api/latest-bills`);
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[LatestBills.NAME] || {items: []};
    }

    render() {
        return (
            <section className="latest-bills">
                <header className="section-header">
                    <h3 className="title">Latest Bills</h3>
                </header>
                <section className="section-content">
                    <List items={this.state.items} itemType={CompactBill}/>
                </section>
            </section>
        );
    }

    componentDidMount() {
        this.constructor.requestData().then((response) => {
            this.setState(response.data);
        }).catch((err) => {
            throw new Error(err);
        });
    }
}
