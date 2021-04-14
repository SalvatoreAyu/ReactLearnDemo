import React, { Fragment } from 'react'
import Temperature from './TemperatureInput'
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }
    render() {
        return (
            <Fragment>
                <Temperature onTemperatureChange={this.handleCelsiusChange} scale="celsius"></Temperature>
                <Temperature onTemperatureChange={this.handleFahrenheitChange} scale="fahrenheit"></Temperature>
            </Fragment>
        )
    }
    handleCelsiusChange() {

    }
    handleFahrenheitChange() { }
}
export default Calculator