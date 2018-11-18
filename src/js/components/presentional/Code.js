import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

 export default class Code extends Component {
     render() {
         const { code, lang } = this.props;
         return <Highlight className={this.lang}>{this.code}</Highlight>;
     }
 };

 Code.propTypes = {
     code: PropTypes.string,
     lang: PropTypes.string
 };
