import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from '../presentational/Text';

export default class DescriptionContainer extends Component {
    render() {
        const { title, description } = this.props;

        return (<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <Text text={title} styleClassName="aura-description-title"/>
                  <Text text={description} styleClassName="aura-description-text" />
                </div>);
    }
}

DescriptionContainer.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
