import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function ChartComponent({ data }) {
  const chartConfigs = {
    type: "Pie3D",
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 1,
        pieRadius: "35%",
        // paletteColors: "",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default ChartComponent;
