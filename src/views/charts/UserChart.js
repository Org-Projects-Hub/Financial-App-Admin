import React, { useEffect, useState } from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";

const brandSuccess = getStyle("success") || "#4dbd74";
const brandInfo = getStyle("info") || "#20a8d8";
const brandPrimary = getStyle("primary") || "#321fdb";

const MainChartExample = ({ style, dataInterval }) => {
  const [labels, setLabels] = useState(null);

  // The lables will eventually come from backend
  useEffect(() => {
    if (dataInterval == "Week") {
      setLabels(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
    } else if (dataInterval == "Month") {
      setLabels([
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
      ]);
    } else {
      setLabels([
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]);
    }
  }, [dataInterval]);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const defaultDatasets = (() => {
    let elements = 27;
    const data1 = [];
    const data2 = [];
    const data3 = [];
    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 100));
      data2.push(random(10, 50));
      data3.push(data1[i] - data2[i]);
    }
    return [
      {
        label: "Users",
        backgroundColor: hexToRgba(brandSuccess, 10),
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data1,
      },
      {
        label: "Students",
        backgroundColor: "transparent",
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data2,
      },

      {
        label: "Teachers",
        backgroundColor: "transparent",
        borderColor: brandPrimary,
        pointHoverBackgroundColor: brandPrimary,
        borderWidth: 1,
        // borderDash: [8, 5],
        data: data3,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 7,
              stepSize: Math.ceil(150 / 8), // Replace 150 wit a Max value obtained from backend
              max: 150, // Same comment as above
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();

  if (!labels) return null;

  return (
    <CChartLine
      style={style}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={labels}
    />
  );
};

export default MainChartExample;
