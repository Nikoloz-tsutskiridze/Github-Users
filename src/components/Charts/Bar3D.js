import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function ChartComponent({ data }) {
  const chartConfigs = {
    type: "bar3d",
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Forks",
        yAxisName: "Repos",
        xAxisNameFonstSize: "16px",
        yAxisNameFonstSize: "16px",
        theme: "fusion",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default ChartComponent;
