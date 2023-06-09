import {
  BosonContainer,
  BosonzinhoContainer,
  MarketItems,
  SubsystemsContainer,
} from "./styles";
import { Subsystem } from "./styles";
import geometry from "../../assets/geometry.jpg";
import aero from "../../assets/aero.jpg";
import brakes from "../../assets/brakes.jpg";
import gearing from "../../assets/gearing.jpg";
import { useContext, useState } from "react";
import { GeometryContainer } from "./styles";
import { DataContainer } from "./styles";
import { Data } from "./styles";
import { Input } from "./styles";
import { Form } from "./styles";
import { SituationContainer } from "./styles";
import { Next } from "./styles";
import { toast } from "react-toastify";
import { GeometryContainerMain } from "./styles";
import { SituationContainerMain } from "./styles";
import { useNavigate } from "react-router";
import { SolutionExplanationContainer } from "./styles";
import UserContext from "../../contexts/userContext";

export default function Guepardo() {
  const subsystems = [
    {
      name: "Geometry",
      image: geometry,
    },
    {
      name: "Brakes",
      image: brakes,
    },
    {
      name: "Gearing",
      image: gearing,
    },
    {
      name: "Aero",
      image: aero,
    },
  ];
  const [isSolutionExplanation, setIsSolutionExplanation] = useState([3]);
  const [levelOfDifficultyVector, setlevelOfDifficultyVector] = useState("");
  const increaseOrDecrease = ["Increase", "Decrease"];
  const [increaseOrDecreaseVector, setIncreaseOrDecreaseVector] = useState("");
  const [isGeometry, setIsGeometry] = useState(false);
  const [isBrakes, setIsBrakes] = useState(false);
  const [isSituation, setIsSituation] = useState(false);
  const [isLevel, setIsLevel] = useState(false);
  const [isSolution, setIsSolution] = useState(false);
  const {
    wheelbase,
    setWheelbase,
    caster,
    setCaster,
    forward,
    setForward,
    front,
    setFront,
    rear,
    setRear,
    frontwheel,
    setFrontwheel,
    rearwheel,
    setRearwheel,
  } = useContext(UserContext);
  const navigate = useNavigate();

  function showFirstPage(name) {
    if (name === "Geometry") {
      setIsGeometry(true);
    }
    if (name === "Brakes") {
      setIsBrakes(true);
    }
  }
  function showSecondPage() {
    setIsSituation(true);
  }
  function showThirdPage(index) {
    switch (index) {
      case 1:
        setIncreaseOrDecreaseVector([0, 1, 0]);
        break;
      case 2:
        setIncreaseOrDecreaseVector([1, 1, 0]);
        break;
      case 3:
        setIncreaseOrDecreaseVector([0, 1, 0]);
        break;
      case 4:
        setIncreaseOrDecreaseVector([0, 1, 0]);
        break;
      case 5:
        setIncreaseOrDecreaseVector([1, 0, 1]);
        break;
    }
    setIsLevel(true);
  }
  function showFourthPage(difficulty) {
    switch (difficulty) {
      case "high":
        setlevelOfDifficultyVector(5);
        break;
      case "medium":
        setlevelOfDifficultyVector(3);
        break;
      case "low":
        setlevelOfDifficultyVector(1);
        break;
    }
    setIsSolution(true);
  }
  function showSolution(index) {
    const na = [index];
    setIsSolutionExplanation(na);
  }
  function apply(arg) {
    toast("Applied");
    if (arg === "fs") {
      increaseOrDecrease[increaseOrDecreaseVector[0]].includes("Increase")
        ? setWheelbase(wheelbase + Number(10 * levelOfDifficultyVector))
        : setWheelbase(wheelbase - Number(10 * levelOfDifficultyVector));
    }
    if (arg === "ss") {
      increaseOrDecrease[increaseOrDecreaseVector[1]].includes("Increase")
        ? setCaster(caster + 1 * levelOfDifficultyVector)
        : setCaster(caster - 1 * levelOfDifficultyVector);
    }
    if (arg === "ts") {
      increaseOrDecrease[increaseOrDecreaseVector[2]].includes("Increase")
        ? setForward(forward + 0.3 * levelOfDifficultyVector)
        : setForward(forward - 0.3 * levelOfDifficultyVector);
    }
    setIsSituation(false);
    setIsLevel(false);
    setIsSolution(false);
  }

  return (
    <>
      {isGeometry ? (
        isSituation ? (
          isLevel ? (
            isSolution ? (
              <SituationContainer>
                <h4 onClick={() => setIsSolution(false)}>Back</h4>
                <SituationContainerMain>
                  <p>Please choose a solution</p>

                  <h1 onClick={() => showSolution(0)}>
                    {increaseOrDecrease[increaseOrDecreaseVector[0]]} wheelbase
                    from {wheelbase} to{" "}
                    {increaseOrDecrease[increaseOrDecreaseVector[0]].includes(
                      "Increase"
                    )
                      ? wheelbase + 10 * levelOfDifficultyVector
                      : wheelbase - 10 * levelOfDifficultyVector}
                  </h1>
                  {isSolutionExplanation.includes(0) ? (
                    <SolutionExplanationContainer>
                      <h5>
                        Lalallalalall alalalallalla llallalalallal
                        lalallalalalallalalla lalal ll al lal lala la lla
                        lalalal lala l ala lall alal lala llalal la la lla lla
                        la la lal lal all alala lalallala lalalal lallal
                        <h6 onClick={() => apply("fs")}>Apply</h6>
                      </h5>
                    </SolutionExplanationContainer>
                  ) : (
                    ""
                  )}

                  <h1 onClick={() => showSolution(1)}>
                    {increaseOrDecrease[increaseOrDecreaseVector[1]]} caster
                    from {caster} to{" "}
                    {increaseOrDecrease[increaseOrDecreaseVector[1]].includes(
                      "Increase"
                    )
                      ? caster + 1 * levelOfDifficultyVector
                      : caster - 1 * levelOfDifficultyVector}{" "}
                  </h1>
                  {isSolutionExplanation.includes(1) ? (
                    <SolutionExplanationContainer>
                      <h5>
                        Lalallalalall alalalallalla llallalalallal
                        lalallalalalallalalla lalal ll al lal lala la lla
                        lalalal lala l ala lall alal lala llalal la la lla lla
                        la la lal lal all alala lalallala lalalal lallal
                        <h6 onClick={() => apply("ss")}>Apply</h6>
                      </h5>
                    </SolutionExplanationContainer>
                  ) : (
                    ""
                  )}

                  <h1 onClick={() => showSolution(2)}>
                    {increaseOrDecrease[increaseOrDecreaseVector[2]]} offset
                    from {forward.toFixed(2)} to{" "}
                    {increaseOrDecrease[increaseOrDecreaseVector[2]].includes(
                      "Increase"
                    )
                      ? (forward + 0.3 * levelOfDifficultyVector).toFixed(2)
                      : (forward - 0.3 * levelOfDifficultyVector).toFixed(
                          2
                        )}{" "}
                  </h1>
                  {isSolutionExplanation.includes(2) ? (
                    <SolutionExplanationContainer>
                      <h5>
                        Lalallalalall alalalallalla llallalalallal
                        lalallalalalallalalla lalalallalalal lalala lla
                        <h6 onClick={() => apply("ts")}>Apply</h6>
                      </h5>
                    </SolutionExplanationContainer>
                  ) : (
                    ""
                  )}
                </SituationContainerMain>
              </SituationContainer>
            ) : (
              <SituationContainer>
                <h4 onClick={() => setIsLevel(false)}>Back</h4>
                <SituationContainerMain>
                  <p>What is the level of difficulty you are facing?"</p>
                  <h1 onClick={() => showFourthPage("high")}>High</h1>
                  <h1 onClick={() => showFourthPage("medium")}>Medium</h1>
                  <h1 onClick={() => showFourthPage("low")}>Low</h1>
                </SituationContainerMain>
              </SituationContainer>
            )
          ) : (
            <>
              <SituationContainer>
                <h4 onClick={() => setIsSituation(false)}>Back</h4>
                <SituationContainerMain>
                  <p>Please select the situation</p>{" "}
                  <h1 onClick={() => showThirdPage(1)}>
                    Instability on the turns
                  </h1>
                  <h1 onClick={() => showThirdPage(2)}>Difficulty to turn</h1>
                  <h1 onClick={() => showThirdPage(3)}>
                    Instability on the straights
                  </h1>
                  <h1 onClick={() => showThirdPage(4)}>
                    Instability at braking
                  </h1>
                  <h1 onClick={() => showThirdPage(5)}>
                    Instability at accelerating
                  </h1>
                </SituationContainerMain>
              </SituationContainer>
            </>
          )
        ) : (
          <GeometryContainer>
            <h4 onClick={() => setIsGeometry(false)}>Back</h4>
            <GeometryContainerMain>
              <p>Geometry</p>
              <DataContainer>
                <Data>
                  <p>Wheelbase</p> <p>Caster</p> <p>Forward Offset </p>
                  <p>Front Tyre Diameter</p> <p>Rear Tyre Diameter</p>
                  <p>Front wheel</p>
                  <p>Rear wheel</p>
                </Data>
                <Form>
                  <div>
                    <Input
                      type="number"
                      placeholder=""
                      value={wheelbase}
                      onChange={(e) => setWheelbase(e.target.value)}
                    />
                    <p>mm</p>
                  </div>
                  <div>
                    <Input
                      type="number"
                      placeholder=""
                      value={caster}
                      onChange={(e) => setCaster(e.target.value)}
                    />
                    <p>°</p>
                  </div>
                  <div>
                    <Input
                      type="number"
                      placeholder=""
                      value={forward.toFixed(2)}
                      onChange={(e) => setForward(e.target.value)}
                    />
                    <p>mm</p>
                  </div>
                  <div>
                    <Input
                      type="number"
                      placeholder=""
                      value={front}
                      onChange={(e) => setFront(e.target.value)}
                    />
                    <p>mm</p>
                  </div>
                  <div>
                    <Input
                      type="number"
                      placeholder=""
                      value={rear}
                      onChange={(e) => setRear(e.target.value)}
                    />
                    <p>mm</p>
                  </div>
                  <div>
                    <Input
                      type="number"
                      placeholder=""
                      value={frontwheel}
                      onChange={(e) => setFrontwheel(e.target.value)}
                    />
                    <p>mm</p>
                  </div>
                  <div>
                    <Input
                      type="number"
                      placeholder=""
                      value={rearwheel}
                      onChange={(e) => setRearwheel(e.target.value)}
                    />
                    <p>mm</p>
                  </div>
                </Form>
              </DataContainer>
              <Next onClick={() => showSecondPage()}>Next</Next>
              <Next onClick={() => navigate("/guepardographics")}>
                Graphics
              </Next>
            </GeometryContainerMain>
          </GeometryContainer>
        )
      ) : isBrakes ? (
        <BosonContainer>
          <BosonzinhoContainer>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
            <MarketItems></MarketItems>
          </BosonzinhoContainer>
        </BosonContainer>
      ) : (
        <SubsystemsContainer>
          {subsystems.map((subsystem) => {
            return (
              <Subsystem
                onClick={() => showFirstPage(subsystem.name)}
                src={subsystem.image}
              ></Subsystem>
            );
          })}
        </SubsystemsContainer>
      )}
    </>
  );
}
