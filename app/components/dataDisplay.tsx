import React, { useState } from 'react';

interface DataDisplayProps {
    data: {
        [key: string]: {
            count: number;
            mean: number;
            std: number;
            min: number;
            '25%': number;
            '50%': number;
            '75%': number;
            max: number;
        };
    }
}

const DataDisplay = ({ data }: DataDisplayProps) => {
    const [expandedVariable, setExpandedVariable] = useState<string | null>(null);

    const toggleVariable = (variable: string) => {
        if (expandedVariable === variable) {
            setExpandedVariable(null);
        } else {
            setExpandedVariable(variable);
        }
    };

    return (
        <div className='data-card'>
            <h2>Indicator's Data Summary by Variable</h2>
            <table>
                <thead>
                    <tr>
                        <th>Variable</th>
                        <th>Statistic</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([variable, stats]) => (
                        <React.Fragment key={variable}>
                            <tr className="variable-header" onClick={() => toggleVariable(variable)}>
                                <td>{`Variable ${variable}`}</td>
                                <td colSpan={2} className="toggle-arrow">
                                    {expandedVariable === variable ? '▼' : '▶'}
                                </td>
                            </tr>
                            {expandedVariable === variable && (
                                <>
                                    {Object.entries(stats).map(([statistic, value]) => (
                                        <tr key={statistic}>
                                            <td></td>
                                            <td>{statistic}</td>
                                            <td>{value.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataDisplay;
