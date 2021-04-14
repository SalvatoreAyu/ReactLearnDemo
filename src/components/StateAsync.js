class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <div>
                <span onClick={this.handleClick.bind(this)}>点我{this.state.count}</span>
            </div>
        )
    }
    increment(state, props) {
        return {
            count: state.count + 1
        }
    }
    handleClick() {
        this.setState(
            {
                count: this.state.count + 1
            })
        this.setState((preState, props) => {
            return { count: preState.count + 1 }
        })
        this.setState((preState, props) => {
            return { count: preState.count + 1 }
        })
    }
}
