import React, { useState } from 'react';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useJsonFetch from '../hooks/useJsonFetch';

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Load: React.FC = () => {
    const [isLoading] = useJsonFetch('https://hook-vwvm.onrender.com/loading', '');

    return (
        <div className="sweet-loading">
      <ClipLoader
        color={'#ffffff'}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    );
}

export default Load;
