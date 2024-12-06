import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function ChartComponent({ data }) {
  const chartConfigs = {
    type: "column3D",
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Popular",
        YAxiName: "Stars",
        xAxiName: "Repos",
        xAxiNameFontSize: "16px",
        yAxiNameFontSize: "16px",
        theme: "fusion",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default ChartComponent;
