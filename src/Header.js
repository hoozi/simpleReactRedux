import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connect';

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>I'm Header</h1>
        )
    }
}

export default connect((state) => {
    return {
        themeColor: state.themeColor
    }
})(Header);