import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const VariableChart = ({ data }: any) => {
    return (
        <div>
            <h2>Time-Series Data</h2>
            <LineChart width={800} height={400} data={data}>
                <XAxis dataKey="timestamp" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="indicator" stroke="blue" name="Indicator" />
            </LineChart>
        </div>
    );
};

export default VariableChart;
