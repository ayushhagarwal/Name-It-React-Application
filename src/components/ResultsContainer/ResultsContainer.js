import React from 'react';
import './ResultsContainer.css';
const ResultsContainer = ({ suggestedNames }) => {
    const suggestName = suggestedNames.map((suggestedName) => {
        return <p key={suggestedName}>{suggestedName}</p>;
    });
    return <div className="results-container">{suggestName}</div>;
};

export default ResultsContainer;
