import React from 'react';


const SelectComponent = ({ getByVariable }: { getByVariable: (value: number) => void }) => {

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        getByVariable(Number(event.target.value)); // Update the selected value in the state
    };
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <div>
            <select value={'selectedValue'} onChange={handleSelectionChange}>
                <option value="">Select a value</option>
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
