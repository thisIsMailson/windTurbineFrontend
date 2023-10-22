import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


interface DateSelectorProps {
    onSubmit: (start: Date, end: Date | null) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [singleDateMode, setSingleDateMode] = useState<boolean>(false);

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };

    const toggleDatePicker = () => {
        setSingleDateMode(!singleDateMode);
        if (singleDateMode) {
            setEndDate(null);
        }
    };

    const handleSubmit = () => {
        if (startDate) {
            onSubmit(startDate, singleDateMode ? null : endDate);
        } else {
            alert('Please select a date.');
        }
    };

    return (
        <div>
            <h1>Date Selector</h1>
            <div>
                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                    showYearDropdown // Allow year dropdown
                    className='data-picker'
                />
                {singleDateMode ? (
                    <button className="toggle-button" onClick={toggleDatePicker}>
                        Use Date Range
                    </button>
                ) : (
                    <>
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select end date"
                            showYearDropdown // Allow year dropdown
                            className='data-picker'
                        />
                        <button className="toggle-button" onClick={toggleDatePicker}>
                            Single Date
                        </button>
                    </>
                )}
                <div>

                    <div className="submit-button" onClick={handleSubmit}>
                        <div className="arrow-icon">{`->`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateSelector;
