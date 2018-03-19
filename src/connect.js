import React, { Component } from 'react';
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    return class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            const { store } = this.context;
            this._updateProps();
            store.subscribe(() => {
                this._updateProps();
            });
        }
        _updateProps() {
            const { store } = this.context;
            const stateProps = mapStateToProps ?
                                mapStateToProps(store.getState(), this.props): 
                                {};
            const dispatchProps = mapDispatchToProps ?
                                mapDispatchToProps(store.dispatch, this.props) : 
                                {};

            this.setState({
                allProps: {
                    ...stateProps,
                    ...this.props,
                    ...dispatchProps
                }
            })
        }

        render() {
            return <WrappedComponent {...this.state.allProps}/>
        }
    }
}

export class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }
    constructor(props) {
        super(props)
    }
    getChildContext() {
        const { store } = this.props
        return {
            store
        }
    }
    render() {
        return React.Children.only(this.props.children);
    }
}

export default connect;