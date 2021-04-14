import React from 'react'
const info = "shit"
class Myclock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            message: ''
        }
    }
    render() {
        return (
            <div className="clock" onClick={this.handleClick.bind(this, info)}>
                <h1>
                    It is now {this.state.date.toLocaleTimeString()}
                </h1>
                <span>{this.state.message}</span>
            </div>
        )
    }
    handleClick = (info) => {
        console.log(this);
        this.setState({
            message: 'u click me ' + info
        })
    }
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
}
export default Myclock