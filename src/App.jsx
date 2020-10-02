import React from 'react';
import Navbar from './components/Navbar'
import ThemeProvider from './context/ThemeProvider'
import  Principal from './components/Principal'


function App() {
  return (
    <ThemeProvider>
       <Navbar/>
       <Principal/>
    </ThemeProvider>
         
  );
}

export default App;
