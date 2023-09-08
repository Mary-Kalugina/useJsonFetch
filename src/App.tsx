import React from 'react';
import ErrorComponent from './components/ErrorComponent';
import Data from './components/Data';
import Load from './components/Load';

const App: React.FC = () => {
    return (
        <>
            <ErrorComponent />
            <Data />
            <Load />
        </>
    )
}

export default App;