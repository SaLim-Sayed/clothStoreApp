import React, { Component, createContext } from 'react'

export const Count = createContext();

class CountContext extends Component {

    state = {
        count: 0
    }
    increaseCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <Count.Provider value={{ ...this.state, increaseCount: this.increaseCount }}>
                {this.props.children}
            </Count.Provider>
        )
    }
}
export default CountContext;