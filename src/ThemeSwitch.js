import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connect';

class ThemeSwitch extends Component {
    static propTypes = {
        onChangeColor: PropTypes.func
    }
    constructor(props) {
        super(props)
    }
    handleChangeColor(color) {
        if(this.props.onChangeColor) {
            this.props.onChangeColor(color)
        }
    }
    render() {
        return (
            <div>
                <button onClick={ this.handleChangeColor.bind(this, 'blue') }>Blue</button>
                <button onClick={ this.handleChangeColor.bind(this, 'red') }>Red</button>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        themeColor: state.themeColor
    }
},(dispatch) => {
    return {
        onChangeColor: (color) => {
            dispatch({ 
                type: 'CHANGE_COLOR', 
                themeColor: color 
            })
        }
    }
})(ThemeSwitch)