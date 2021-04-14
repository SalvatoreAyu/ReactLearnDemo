import React, { Fragment } from 'react'
import Clock from '../../components/Clock'
import LoginControl from '../../components/LoginControl'
import ControlComponent from '../../components/ControlComponent'
import Calculator from '../../components/temperature/Calculator'
import Dialog from '../../components/Dialog'
import Theme from '../../components/context/Theme'
import FancyButton from '../../components/ref/FancyButton'
import StateGo from '../../components/useState/stateGo'
import FunctionRef from '../../components/ref/FunctionRef'
import Portal from '../../components/portals/Portal'
import CallbackRef from '../../components/callbackRef/CallbackRef'
import PureComponent from '../../components/pureComponent/PureComponent'
// import RenderProp from '../../components/renderProps/RenderProp'
const ref = React.createRef()
class Login extends React.Component {
    render() {
        return (
            <Fragment>
                <div>i am login page</div>
                <Clock></Clock>
                <LoginControl></LoginControl>
                <ControlComponent></ControlComponent>
                <Calculator></Calculator>
                <Dialog></Dialog>
                <Theme></Theme>
                <FancyButton ref={ref}>
                    <h3>fuck</h3>
                </FancyButton>
                <StateGo></StateGo>
                <FunctionRef></FunctionRef>
                <Portal></Portal>
                <CallbackRef></CallbackRef>
                {/* <RenderProp></RenderProp> */}
                <PureComponent></PureComponent>
            </Fragment>
        )
    }
}
export default Login
