import React from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {

    const themes = {
        color: '#000',
        background: '#eee'

    }
    const [theme, setTheme] = React.useState(themes)
    const [nombre, setNombre] = React.useState('')
    const [saludo, setSaludo] = React.useState('Principal')
    const temas = (valor) => {
        setTheme(valor)
        localStorage.setItem('temas', JSON.stringify(valor))
    }

    React.useEffect(() => {

        if (localStorage.getItem('temas')) {
            const local = JSON.parse(localStorage.getItem('temas'))
            setTheme(local)
            setNombre('maritn')


        }

    }, [])

    return ( < ThemeContext.Provider value = {
            { theme, temas, nombre, setNombre, setSaludo, saludo }
        } > { props.children } <
        /ThemeContext.Provider>
    )
}

export default ThemeProvider