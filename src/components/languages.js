import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Languages = () => {
  const { repos } = useSelector((state) => state.User);
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    const reposAndLanguages = repos
      .map((repo) => repo.language)
      .filter((item) => item !== null);
    let langsAndCounts = {};

    reposAndLanguages.forEach((value) => {
      langsAndCounts[value] = (langsAndCounts[value] || 0) + 1;
    });

    let langsSorted = Object.keys(langsAndCounts).sort((a, b) => {
      return langsAndCounts[b] - langsAndCounts[a];
    });

    langsSorted.forEach((value) => {
      setFinalData((final) => {
        return [...final, { label: value, value: langsAndCounts[value] }];
      });
    });
  }, [repos]);

  let chartContext = [];
  for (let i = 0; i < 5; i++) {
    chartContext.push(finalData[i]);
  }

  const chartData = finalData.length > 5 ? chartContext : finalData;
  const chartConfigs = {
    type: "pie2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages", //Set the chart caption
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

export default Languages;
