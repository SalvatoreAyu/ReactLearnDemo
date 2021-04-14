import React from 'react'

export default class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            arr: [1, 2, 3, 4, 5],
        }
    }
    handleAdd() {
        const { arr } = this.state
        arr.push(7)
        this.setState({
            arr: [...arr],
        })
        console.log(this.state.arr)
    }
    handleDelete() {
        const { arr } = this.state
        arr.pop()
        console.log(arr)
        this.setState({
            arr: [...arr],
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                <ul>
                    {this.state.arr.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <h3>array now is {this.state.arr} </h3>
                <MyComponent></MyComponent>
                <button onClick={this.handleAdd}>add</button>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}
function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />
}
function createMarkup() {
    return { __html: 'First &middot; Second <h1>f</h1>' }
}
