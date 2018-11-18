import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../presentational/Text';

export default class DescriptionContainer extends Component {
    render() {
        const { title, description } = this.props;

        return <section className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <Text text={text} styleClassName="aura-description-title"/>
                  <Text test={description} styleClassName="aura-description-text" />
                </div>
               </section>;
    }
}

Text.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
