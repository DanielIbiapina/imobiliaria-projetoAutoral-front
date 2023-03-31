import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import styled from "styled-components";

function SenoGraph() {
  const chartRef = useRef(null);
  const [wheelbase, setWheelbase] = useState(1350);
  const [caster, setCaster] = useState(23);
  const [forward, setForward] = useState(29.7);
  const [front, setFront] = useState(560);
  const [rear, setRear] = useState(602);
  const [frontwheel, setFrontwheel] = useState(432);
  const [rearwheel, setRearwheel] = useState(432);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext("2d");
    const p = wheelbase;
    const ε = caster;
    const d = forward;
    const D_f = front;
    const D_r = rear;
    const d_f = frontwheel;
    const d_r = rearwheel;
    const φ = Math.PI / 4;

    const R_f = D_f / 2;
    const R_r = D_r / 2;
    const r_f = d_f / 2;
    const r_r = d_r / 2;
    const t_f = (R_f - r_f) / 2;
    const t_r = (R_r - r_r) / 2;
    const ρ_f = R_f - t_f;
    const ρ_r = R_r - t_r;
    const alfa = [
      (2 * Math.PI * 0) / 360,
      (2 * Math.PI * 3) / 360,
      (2 * Math.PI * 6) / 360,
      (2 * Math.PI * 8) / 360,
      (2 * Math.PI * 11) / 360,
      (2 * Math.PI * 13) / 360,
      (2 * Math.PI * 15) / 360,
      (2 * Math.PI * 17) / 360,
      (2 * Math.PI * 20) / 360,
    ];
    const a = R_f * Math.tan(ε) - d / Math.cos(ε);
    const a_n = a * Math.cos(ε);

    new Chart(chartCanvas, {
      type: "line",
      data: {
        labels: [
          "0",
          "6π/360",
          "12π/360",
          "16π/360",
          "22π/360",
          "26π/360",
          "30π/360",
          "34π/360",
          "40π/360",
        ],
        datasets: [
          {
            label: "Seno",
            data: [
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[0]) *
                        Math.sin(alfa[0]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[0])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[1]) *
                        Math.sin(alfa[1]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[1])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[2]) *
                        Math.sin(alfa[2]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[2])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[3]) *
                        Math.sin(alfa[3]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[3])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[4]) *
                        Math.sin(alfa[4]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[4])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[5]) *
                        Math.sin(alfa[5]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[5])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[6]) *
                        Math.sin(alfa[6]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[6])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[7]) *
                        Math.sin(alfa[7]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[7])),
              R_f *
                (1 -
                  Math.sqrt(
                    1 -
                      Math.sin(alfa[8]) *
                        Math.sin(alfa[8]) *
                        Math.sin(ε) *
                        Math.sin(ε)
                  )) -
                d * Math.sin(ε) * (1 - Math.cos(alfa[8])),
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
