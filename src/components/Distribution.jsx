import React from "react";
import * as d3 from "d3";
import './Distribution.css';

const marginTop = 30;
const marginBottom = 60;
const marginLeft = 65;
const marginRight = 25;

const Distribution = ({ width, height, data }) => {
    const chartBottomY = 450;

    const x = d3.scaleBand()
        .domain(data.map((d) => d.probabilities))
        .range([marginLeft, width - marginRight])
        .paddingInner(9);

    const xAxis = d3.axisBottom(x).tickPadding(5)
                .tickFormat((interval, i) => {
                    return i%2 == 0 ? "" : interval;
                })

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.probability)])
        .range([chartBottomY, marginTop]);

    const yAxis = d3.axisLeft(y);
    React.useEffect(() => {
        d3.select(".x-axis")
            .call(xAxis)
            .selectAll("text")
            .attr("font-size", "12px")

            .attr("transform", "rotate(-45)")
            .attr("text-anchor", "end");
        d3.select(".y-axis")
            .call(yAxis)
            .selectAll("text")
            .attr("font-size", "14px");
    }, [xAxis, yAxis]);

  return (
    <div className="container">
      <svg className="viz" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect width="700" height="500" fill="black" />
        <g className="bars">
          {data.map((d) => (
            <rect
              key={d.probabilities}
              width={3}
              height={450 - y(d.probability)}
              x={x(d.probabilities)}
              y={y(d.probability)}
              fill="#62c9c9"
              
            />
          ))}
        </g>
        <g className="x-axis" transform={`translate(0,${chartBottomY})`}></g>
        <g className="y-axis" transform={`translate(${marginLeft},0)`}></g>
      </svg>
    </div>
  );
};

export default Distribution;

    