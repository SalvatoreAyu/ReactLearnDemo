import React, { Component } from 'react'

export default class RenderProp extends Component {
    render() {
        return (
            <div>
                <h1>mouse move</h1>
                <Mouse cat={(mouse) => <Cat mouse={mouse}></Cat>}></Mouse>
            </div>
        )
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.state = {
            x: 0,
            y: 0,
        }
    }
    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        })
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                <p>
                    now: x {this.state.x}, y {this.state.y}
                </p>
                <div className="whereRender">{this.props.cat(this.state)}</div>
            </div>
        )
    }
}

class Cat extends Component {
    render() {
        return (
            <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
                <img src="./logo192.png" style={{ width: '20px', height: '20px', position: 'absolute', top: this.props.mouse.x, left: this.props.mouse.y }} alt="" />
            </div>
        )
    }
}
