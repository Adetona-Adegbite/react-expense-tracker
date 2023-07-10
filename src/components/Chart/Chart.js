import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  var dataPointValues = props.dataPoints.map((item) => item.value);
  //   console.log(dataPointValues);
  const totalMax = Math.max(...dataPointValues);
  //   console.log(totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
