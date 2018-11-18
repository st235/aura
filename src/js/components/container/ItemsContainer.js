import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../presentational/List';

export default class ItemsContainer extends Component {
    render() {
        const { items, onItemClickListener } = this.props;

        return (<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <List items={items} onItemClickListener={onItemClickListener} />
                </div>);
    }
}

ItemsContainer.propTypes = {
    items: PropTypes.array.isRequired,
    onItemClickListener: PropTypes.func
};
