import React from 'react'

const FancyButton = React.forwardRef((props, ref) => {
    FancyButton.displayName = 'FancyButton'
    return (
        <div className="FancyButton">
            <div ref={ref}>{props.children}</div>
            <div>i am not refs</div>
        </div>
    )
})
function logProps(Wrapper) {
    class LogProps extends React.Component {
        componentDidUpdate(preV) {
            console.log('pre props', preV)
            console.log('current props', this.props)
            console.log(this.props.forwardRef)
        }
        render() {
            const { myForwardRef, ...rest } = this.props
            return <Wrapper {...rest} ref={myForwardRef}></Wrapper>
        }
    }
    LogProps.displayName = 'ThisIsLogProps'
    return React.forwardRef(function myFunc(props, ref) {
        return <LogProps {...props} myForwardRef={ref}></LogProps>
    })
}
const Fancy = logProps(FancyButton)
export default Fancy
