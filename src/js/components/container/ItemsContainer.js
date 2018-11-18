import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../presentational/List';

export default class ItemsContainer extends Component {
    render() {
        const { items, onItemClickListener } = this.props;

        return (<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <List items={items} onItemClickListener={onItemClickListener} />
                </div>);
    }
}

ItemsContainer.propTypes = {
    items: PropTypes.array.isRequired,
    onItemClickListener: PropTypes.func
};
