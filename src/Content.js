import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import connect from './connect';

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>I'm Content</p>
                <ThemeSwitch/>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        themeColor: state.themeColor
    }
})(Content)