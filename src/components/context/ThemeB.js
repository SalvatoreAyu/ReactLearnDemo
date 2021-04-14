import React, { useContext } from 'react'
import { ThemeButton } from './theme-context'
// export default class ThemeB extends Component {
//     // static contextType = ThemeButton
//     constructor(props) {
//         super(props)
//         this.clickButton = this.clickButton.bind(this)
//     }
//     render() {
//         return (
//             <ThemeButton.Consumer>
//                 {({ theme, toggleTheme }) => {
//                     return (
//                         <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
//                             change theme
//                         </button>
//                     )
//                 }}
//             </ThemeButton.Consumer>
//         )
//     }
//     clickButton() {
//         console.log('fuck')
//     }
// }

export default function ThemeB(params) {
    const themeContext = useContext(ThemeButton)
    return (
        <button onClick={themeContext.toggleTheme} style={{ backgroundColor: themeContext.theme.background }}>
            please change Me
        </button>
    )
}
