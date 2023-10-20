interface Data {
    data: {
        indicator: number;
        timestamp: string;
        turbine_id: number;
        variable: number;
    }

}

const StatusDisplay = ({ data }: Data) => {
    return (
        <div className="data-card">
            <h2>Data Details</h2>
            <div className="data-item">
                <strong>Indicator:</strong> {data.indicator}
            </div>
            <div className="data-item">
                <strong>Timestamp:</strong> {data.timestamp}
            </div>
            <div className="data-item">
                <strong>Turbine ID:</strong> {data.turbine_id}
            </div>
            <div className="data-item">
                <strong>Variable:</strong> {data.variable}
            </div>
        </div>
    );
};
export default StatusDisplay;