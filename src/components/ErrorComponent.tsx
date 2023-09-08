import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const ErrorComponent: React.FC = () => {
    const [error] = useJsonFetch('https://hook-vwvm.onrender.com/error', '');

    return (
        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
            {error !== null && typeof error === 'string' ? <div>{error}</div> : null}
        </div>
    );
}

export default ErrorComponent;
