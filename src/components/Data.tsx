import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const Data: React.FC = () => {
    const [data] = useJsonFetch('https://hook-vwvm.onrender.com/data', '');
    return (
        <div>{data.status}</div>
    )
}

export default Data;