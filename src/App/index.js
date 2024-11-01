import React, { useEffect } from "react";
import { SkinProvider } from '../SkinContext'; 
import { AppUI } from './AppUI';

function App() {
    return (
        <SkinProvider>
            <AppUI />
        </SkinProvider>
    );
}

export default App;