import React, { Component, createContext } from 'react'
import context from 'react-bootstrap/esm/AccordionContext';
export const _Count = createContext();

class _Context extends Component {

    state = {
        _count: 0
    }
    decreaseCount = () => {
        this.setState({ count: this.state._count - 1 })
    }
    render() {
        return (
            <Count.Provider value={{ ...this.state, increaseCount: this.increaseCount }}>
                {this.props.children}
            </Count.Provider>
        )
    }
}
export default _Context;