import React from 'react';

import List from '../common/List';
import CompactBill from './CompactBill';

import Actions from '../../actions/Actions';

export default class LatestBills extends React.Component {
    static loadAction(params, domain) {
        return Actions.loadLatestBillsData(params, domain);
    }

    constructor(props) {
        super(props);
        this.changeHandler = this.onChange.bind(this);
        this.state = this.props.store.getAll() || {};
    }

    componentWillMount() {
        if (process.browser) {
            this.props.store.addChangeListener(this.changeHandler);            
        }
    }

    componentWillUnmount() {
        this.props.store.removeChangeListener(this.changeHandler);
    }

    componentDidMount() {
        Actions.getLatestBillsData(this.props.params);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let result = true;

        if (this.state.items && nextState.items) {
            const oldItems = this.state.items;
            const newItems = nextState.items;

            if (oldItems.length === newItems.length) {
                const validList = newItems.filter((item, index) => {
                    return oldItems[index].id !== item.id;
                });

                if (validList.length === 0) {
                    result = false;
                }
            }
        }

        return result;
    }

    onChange() {
        const state = this.props.store.getAll();
        this.setState(state);
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
}
