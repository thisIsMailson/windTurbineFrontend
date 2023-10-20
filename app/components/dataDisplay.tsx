import React from 'react';

interface DataDisplayProps {
    data: {
        count: {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
        mean: {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
        std: {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
        min: {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
        '25%': {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
        '50%': {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
        '75%': {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
        max: {
            indicator: number;
            turbine_id: number;
            variable: number;
        };
    }
}


const DataDisplay = ({ data }: DataDisplayProps) => {
    console.log('data =>>', data)
    return (
        <div className='data-card'>
            <h2>Data Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Statistic</th>
                        <th>Indicator</th>
                        <th>Turbine ID</th>
                        <th>Variable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Count</td>
                        <td>{data.count?.indicator}</td>
                        <td>{data.count?.turbine_id}</td>
                        <td>{data.count?.variable}</td>
                    </tr>
                    <tr>
                        <td>Mean</td>
                        <td>{data.mean?.indicator.toFixed(2)}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Standard Deviation</td>
                        <td>{data.std?.indicator.toFixed(2)}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Minimum</td>
                        <td>{data.min?.indicator}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>25th Percentile</td>
                        <td>{data['25%']?.indicator.toFixed(2)}</td>
                        <td>{data['25%']?.turbine_id.toFixed(2)}</td>
                        <td>{data['25%']?.variable.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>50th Percentile (Median)</td>
                        <td>{data['50%']?.indicator.toFixed(2)}</td>
                        <td>{data['50%']?.turbine_id.toFixed(2)}</td>
                        <td>{data['50%']?.variable.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>75th Percentile</td>
                        <td>{data['75%']?.indicator.toFixed(2)}</td>
                        <td>{data['75%']?.turbine_id.toFixed(2)}</td>
                        <td>{data['75%']?.variable.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Maximum</td>
                        <td>{data.max?.indicator}</td>
                        <td>{data.max?.turbine_id}</td>
                        <td>{data.max?.variable}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DataDisplay;
