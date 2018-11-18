import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Code from '../presentational/Code';

const PREFERED_LANGUAGE = "Java";

export default class CodeContainer extends Component {
    render() {
        const { code } = this.props;

        return (<div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <Code code={code.data} lang={code.language || PREFERED_LANGUAGE}/>
                </div>);
    }
}

CodeContainer.propTypes = {
    code: PropTypes.object.isRequired
};
