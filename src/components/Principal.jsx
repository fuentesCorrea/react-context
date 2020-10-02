import React from 'react'

import {ThemeContext} from '../context/ThemeProvider'
    


const Principal = () => {

    const { saludo, setSaludo} = React.useContext(ThemeContext)

    return (
        <div>
           saludos desde {saludo}
        </div>
    )
}

export default Principal
