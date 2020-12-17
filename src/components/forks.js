import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Forks = () => {
  const [finalData, setFinalData] = useState([]);
  const { repos } = useSelector((state) => state.User);

  useEffect(() => {
    const forks = {};
    repos.forEach((item) => {
      forks[item.name] = item.forks_count;
    });

    let forkSorted = Object.keys(forks).sort((a, b) => {
      return forks[b] - forks[a];
    });

    forkSorted.forEach((value) => {
      setFinalData((final) => {
        return [...final, { label: value, value: forks[value] }];
      });
    });
  }, []);

  let chartContext = [];
  for (let i = 0; i < 5; i++) {
    chartContext.push(finalData[i]);
  }

  const chartData = chartContext;

  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked Repositories", //Set the chart caption
        xAxisName: "Repositories", //Set the x-axis name
        yAxisName: "Stars", //Set the y-axis name
        theme: "fusion", //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };

  return (
    <>
      <ReactFC {...chartConfigs} />
    </>
  );
};

export default Forks;
