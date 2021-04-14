import React, { Component } from 'react'

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return (
            <div>
                <legend>enter a temperature for {this.props.scale}</legend>
                <input type="text" onChange={this.handleChange} />
            </div>
        )
    }
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
}
