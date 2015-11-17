import React from 'react';

export default class CompactBill extends React.Component {
    render() {
        const data = this.props.data;
        const amount = `$${data.amount}`;

        return (
            <div className="bill compact-bill">
                <img className="icon" src={data.icon}/>
                <div className="info-container">
                    <h4 className="title">{data.vendor}</h4>
                    <span className="period">{data.period}</span>
                </div>
                <span className="amount">{amount}</span>
            </div>
        );
    }
}
