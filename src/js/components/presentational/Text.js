import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Text extends Component {
    render() {
        const { text, styleClassName } = this.props;
        return <p className={styleClassName}>{text}</p>;
    }
};

Text.propTypes = {
    text: PropTypes.string.isRequired,
    styleClassName: PropTypes.string.isRequired
};
