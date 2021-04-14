import React, { useState, Fragment } from 'react'
import ThemeB from './ThemeB'
import { themes, ThemeButton } from './theme-context'
// export default class Theme extends Component {
//     constructor(props) {
//         super(props)
//         this.toggleTheme = this.toggleTheme.bind(this)
//         this.state = {
//             theme: themes.light,
//             toggleTheme: this.toggleTheme,
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <ThemeButton.Provider value={this.state}>
//                     <ToolBar></ToolBar>
//                 </ThemeButton.Provider>
//             </div>
//         )
//     }
//     toggleTheme() {
//         console.log('xxx')
//         this.setState((state) => ({
//             theme: state.theme === themes.light ? themes.dark : themes.light,
//         }))
//     }
// }
export default function Theme(params) {
    const [state, setState] = useState({
        theme: themes.light,
        toggleTheme: toggleTheme,
    })
    function toggleTheme() {
        setState((preState) => {
            return { ...preState, theme: preState.theme === themes.dark ? themes.light : themes.dark }
        })
    }
    return (
        <Fragment>
            <ThemeButton.Provider value={state}>
                <ToolBar
                    onClick={() =>
                        setState((preState) => {
                            console.log(preState)
                        })
                    }
                ></ToolBar>
            </ThemeButton.Provider>
        </Fragment>
    )
}

function ToolBar(props) {
    return (
        <>
            <ThemeB>click</ThemeB>
        </>
    )
}
