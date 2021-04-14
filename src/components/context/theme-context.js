import React from 'react'

export const themes = {
    light: {
        foreground: '#000000',
        background: 'blue',
    },
    dark: {
        foreground: '#ffffff',
        background: 'red',
    },
};

export const ThemeButton = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { }
});