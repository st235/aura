import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Code from '../presentational/Code';

const PREFERED_LANGUAGE = "Java";

export default class CodeContainer extends Component {
    render() {
        const { code } = this.props;

        return (<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <Code code={code.data} lang={code.language || PREFERED_LANGUAGE}/>
                </div>);
    }
}

CodeContainer.propTypes = {
    code: PropTypes.object.isRequired
};
