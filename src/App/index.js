import React from 'react'
import { AppUI } from './AppUI'
import { SkinProvider } from '../SkinContext';

function App() {
    return(
        <SkinProvider> 
            <AppUI/>
        </SkinProvider>
    );
};

export default App;