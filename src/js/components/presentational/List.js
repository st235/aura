import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
    render() {
        const { items, onItemClickListener } = this.props;
        return <ul className="aura-items-list">{this._createListItem(items, onItemClickListener)}</ul>;
    }

    _createListItem(items, onItemClickListener) {
        return items.map((value, index) => (
            <li key={`aura_il_${index}`} onClick={() => { onItemClickListener(value) }}>
                <div className="aura-items-list-title">{value.title}</div>
                <div className="aura-items-list-subtitle">{value.subtitle}</div>
            </li>
            ));
    }
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    onItemClickListener: PropTypes.func
};
