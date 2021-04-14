import React, { Component } from 'react'


function LogProps(Wrapper) {
    class LogProps extends Component {
        componentDidUpdate(preV) {
            console.log('pre props', preV);
            console.log('current props', this.props);
        }
        render() {
            const { forwardRef, ...rest } = this.props
            return (
                <Wrapper {...rest} ref={forwardRef}></Wrapper>
            )
        }
    }
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardRef={ref}></LogProps>
    })
}
