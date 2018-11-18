import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Code from '../presentational/Code';

export default class CodeContainer extends Component {
    render() {
        const { code } = this.props;

        return (<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <Code code={code} lang="Java"/>
                </div>);
    }
}

CodeContainer.propTypes = {
    code: PropTypes.string.isRequired
};
