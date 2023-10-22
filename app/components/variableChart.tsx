import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const VariableChart = ({ data, color = 'blue' }: any) => {
    return (
        <div>
            <h2>Time-Series Data</h2>
            <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="timestamp" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="indicator" stroke={color} name="Indicator" />
            </LineChart>
        </div>
    );
};

export default VariableChart;
