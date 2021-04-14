import React from 'react'
import ReactDOM from 'react-dom'
class Portal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { flag: false }
    }
    render() {
        return (
            <>
                <div
                    style={{ width: '100px', height: '50px', backgroundColor: 'red', overflow: 'hidden' }}
                    onClick={() => {
                        console.log('div is clicked')
                    }}
                >
                    <button onClick={() => this.handleClick()}>click </button>
                    {this.state.flag && <Child></Child>}
                </div>
                <div id="fuck"></div>
            </>
        )
    }
    handleClick() {
        this.setState({ flag: !this.state.flag })
    }
}
function Child() {
    return ReactDOM.createPortal(<ChildComponent></ChildComponent>, document.getElementById('fuck'))
}
function ChildComponent() {
    return (
        <ul
            onClick={() => {
                console.log('child is clicked')
            }}
        >
            <li>go</li>
            <li>go</li>
            <li>go</li>
            <li>go</li>
            <li>go</li>
        </ul>
    )
}
export default Portal
