import "../../pages/Dashboard.css";
export const MetricItem = (props) => {
  return (
    <div className="metric-item">
      <div className="number-and-chart-parent">
        <div className="number-and-chart">
          <div className="page-header">
            <div className="number">{props.number}</div>
          </div>
        </div>
        <div className="heading-and-dropdown">
          <div className="heading">{props.name}</div>
        </div>
      </div>
      <img className="metric-item-child" alt="" src={props.image} />
    </div>
  );
};
