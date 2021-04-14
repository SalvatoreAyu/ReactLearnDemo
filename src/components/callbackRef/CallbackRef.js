import React, { Component } from 'react'

export default class CallbackRef extends Component {
    constructor(props) {
        super(props)
        this.setInputRef = this.setInputRef.bind(this)
        this.inputRef = null
        this.focusRef = this.focusRef.bind(this)
    }
    focusRef() {
        console.log(this.inputRef)
        if (this.inputRef) {
            this.inputRef.focus()
        }
    }
    setInputRef = (element) => {
        this.inputRef = element
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.setInputRef} />
                <button onClick={this.focusRef}>focus</button>
            </div>
        )
    }
}
