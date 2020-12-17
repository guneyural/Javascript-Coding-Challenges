import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const StarsPerLanguage = () => {
  const [finalData, setFinalData] = useState([]);
  const { repos } = useSelector((state) => state.User);

  useEffect(() => {
    const starAndRepos = {};
    repos.forEach((item) => {
      starAndRepos[item.language] =
        (starAndRepos[item.language] || 0) + item.stargazers_count;
    });

    for (let star in starAndRepos) {
      if (starAndRepos[null]) {
        delete starAndRepos[null];
      }
      console.log(starAndRepos);
    }

    let starSorted = Object.keys(starAndRepos).sort((a, b) => {
      return starAndRepos[b] - starAndRepos[a];
    });

    starSorted.filter((item) => item !== null);

    starSorted.forEach((value) => {
      setFinalData((final) => {
        return [...final, { label: value, value: starAndRepos[value] }];
      });
    });
  }, [repos]);

  let chartContext = [];
  for (let i = 0; i < 5; i++) {
    chartContext.push(finalData[i]);
  }

  const chartData = finalData.length > 5 ? chartContext : finalData;

  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language", //Set the chart caption
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

export default StarsPerLanguage;
