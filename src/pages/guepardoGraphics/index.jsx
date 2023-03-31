import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import styled from "styled-components";

function SenoGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext("2d");

    new Chart(chartCanvas, {
      type: "line",
      data: {
        labels: [
          "0",
          "1/4π",
          "1/2π",
          "3/4π",
          "π",
          "5/4π",
          "3/2π",
          "7/4π",
          "2π",
        ],
        datasets: [
          {
            label: "Seno",
            data: [
              Math.sin(0),
              Math.sin(Math.PI / 4),
              Math.sin(Math.PI / 2),
              Math.sin((3 * Math.PI) / 4),
              Math.sin(Math.PI),
              Math.sin((5 * Math.PI) / 4),
              Math.sin((3 * Math.PI) / 2),
              Math.sin((7 * Math.PI) / 4),
              Math.sin(2 * Math.PI),
            ],
            borderColor: "rgb(75, 192, 192)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Gráfico do Seno",
        },
        tooltips: {
          mode: "null",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Ângulo (em radianos)",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Seno",
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <Center>
      <canvas ref={chartRef}></canvas>
    </Center>
  );
}

const Center = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SenoGraph;
