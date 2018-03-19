import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import createStore from './redux';
import { Provider } from './connect';

const themeReducer = (state, action) => {
    if(!state) {
        return {
            themeColor: 'red'
        }
    }
    let type = action.type;
    switch(type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        break;
        default:
            return state;
    }
}

const store = createStore(themeReducer);

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Content/>
            </Fragment>
        )
    }
}

render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);