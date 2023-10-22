import React from 'react';


const SelectComponent = ({ getByVariable, title, display }: { getByVariable: (value: number) => void, title?: string, display: string }) => {

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        getByVariable(Number(event.target.value)); // Update the selected value in the state
    };
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <div>
            <h2>{title}</h2>
            <select value={'selectedValue'} onChange={handleSelectionChange}>
                <option value="">{display}</option>
                {values.map((v) => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectComponent;
