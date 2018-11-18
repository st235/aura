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
                <div className="aura-items-list-header">{value.header}</div>
                <div className="aura-items-list-description">{value.description}</div>
            </li>
            ));
    }
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    onItemClickListener: PropTypes.func
};
