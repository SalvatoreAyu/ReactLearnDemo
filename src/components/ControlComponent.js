import React, { Fragment } from 'react'
class ControlComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            selectValue: 'banana'
        }
    }
    render() {
        return (
            <Fragment>
                <br />
                <input value={this.state.value} onChange={this.handleChange.bind(this)}></input>
                <span>{this.state.value}</span>
                <br />
                <select value={this.state.selectValue} onChange={this.handleSelectChange.bind(this)}>
                    <option value="orange">橙子</option>
                    <option value="apple">苹果</option>
                    <option value="banana">香蕉</option>
                    <option value="watermelon">西瓜</option>
                </select>
            </Fragment>
        )
    }
    handleSelectChange(e) {
        console.log(`u select ${e.target.value}`);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
}
export default ControlComponent