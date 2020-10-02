import React from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {

    const {theme, temas, nombre, setNombre} = React.useContext(ThemeContext)

    return (
        <div style={
            {
                background: theme.background, 
                color: theme.color
            }
        }>
            <h1>Navbar</h1>
            <label>Color</label>
            <input 
                type="color" 
                value={theme.color}
                onChange={e => temas({...theme, color: e.target.value})}
            />
            <label>Fondo</label>
            <h1>{nombre}</h1>
            <input 
                type="color"
                value={theme.background}
                onChange={e => temas({...theme, background: e.target.value})}
            />

            <input 
                type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />



        </div>
    )
}

export default Navbar